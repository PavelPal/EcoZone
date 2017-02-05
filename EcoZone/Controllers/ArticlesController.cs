using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using EcoZone.Domain.Context;
using EcoZone.Models;

namespace EcoZone.Controllers
{
    [RoutePrefix("articles")]
    public class ArticlesController : ApiController
    {
        private readonly EcoZoneDbContext _context;

        public ArticlesController(EcoZoneDbContext context)
        {
            this._context = context;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<ArticleViewModel> Get()
        {
            var list = this._context.Articles.Where(x => x.IsApproved).Select(x => new ArticleViewModel
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Source = x.Source,
                ImagePath = x.ImagePath,
                Views = x.Views,
                Likes = x.Likes.Count,
                Date = x.Date,
                IsApproved = x.IsApproved
            });
            return list;
        }

        [HttpGet]
        [Route("getPopular")]
        public IEnumerable<ArticleViewModel> GetPopular()
        {
            return
                this._context.Articles.Where(x => x.IsApproved)
                    .Include(x => x.Likes)
                    .Include(x => x.Comments)
                    .OrderBy(x => x.Views)
                    .ThenBy(x => x.Likes.Count)
                    .ThenBy(x => x.Comments.Count)
                    .Take(7)
                    .Select(x => new ArticleViewModel
                    {
                        Id = x.Id,
                        Title = x.Title,
                        Description = x.Description,
                        Source = x.Source,
                        ImagePath = x.ImagePath,
                        Views = x.Views,
                        Likes = x.Likes.Count,
                        Date = x.Date,
                        IsApproved = x.IsApproved
                    });
        }

        [HttpGet]
        public async Task<object> Get(int? id)
        {
            if (!id.HasValue)
                return BadRequest();

            var article = await this._context.Articles.FirstOrDefaultAsync(x => x.IsApproved && x.Id == id);
            if (article == null)
                return NotFound();

            return new ArticleViewModel
            {
                Id = article.Id,
                Title = article.Title,
                Description = article.Description,
                Source = article.Source,
                ImagePath = article.ImagePath,
                Views = article.Views,
                Likes = article.Likes.Count,
                Date = article.Date,
                IsApproved = article.IsApproved
            };
        }

        public async Task<object> Post([FromBody] CreateArticleViewModel article)
        {
            if (article == null)
                return BadRequest();

            this._context.Articles.Add(article.MapToArticle());
            this._context.ChangeTracker.DetectChanges();
            await this._context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public void Put(int id, [FromBody] CreateArticleViewModel article)
        {
            // todo updating article
        }

        [HttpDelete]
        public async Task<object> Delete(int? id)
        {
            if (!id.HasValue)
                return BadRequest();

            var article =
                await this._context.Articles.Include(x => x.Comments)
                    .Include(x => x.Likes)
                    .Include(x => x.PendingArticle)
                    .FirstOrDefaultAsync(x => x.Id == id.Value);
            if (article == null)
                return NotFound();

            this._context.Articles.Remove(article);
            this._context.ChangeTracker.DetectChanges();
            await this._context.SaveChangesAsync();
            return Ok();
        }
    }
}