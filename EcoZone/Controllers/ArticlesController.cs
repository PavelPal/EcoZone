using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using EcoZone.Domain.Context;
using EcoZone.Models;

namespace EcoZone.Controllers
{
    [RoutePrefix("api/articles")]
    public class ArticlesController : ApiController
    {
        private readonly EcoZoneDbContext _context;

        public ArticlesController(EcoZoneDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<ArticleViewModel> Get()
        {
            return _context.Articles.Where(x => x.IsApproved).Select(x => new ArticleViewModel(x));
        }

        [HttpGet]
        [Route("getPopular")]
        public IEnumerable<ArticleViewModel> GetPopular()
        {
            return
                _context.Articles.Where(x => x.IsApproved)
                    .Include(x => x.Likes)
                    .Include(x => x.Comments)
                    .OrderBy(x => x.Views)
                    .ThenBy(x => x.Likes.Count)
                    .ThenBy(x => x.Comments.Count)
                    .Take(7)
                    .Select(x => new ArticleViewModel(x));
        }

        [HttpGet]
        public async Task<object> Get(int? id)
        {
            if (!id.HasValue)
                return BadRequest();

            var article = await _context.Articles.FirstOrDefaultAsync(x => x.IsApproved && x.Id == id);
            if (article == null)
                return NotFound();

            return new ArticleViewModel(article);
        }

        public void Post([FromBody] CreateArticleViewModel article)
        {
            // todo adding article
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
                await _context.Articles.Include(x => x.Comments)
                    .Include(x => x.Likes)
                    .Include(x => x.PendingArticle)
                    .FirstOrDefaultAsync(x => x.Id == id.Value);
            if (article == null)
                return NotFound();

            _context.Articles.Remove(article);
            _context.ChangeTracker.DetectChanges();
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}