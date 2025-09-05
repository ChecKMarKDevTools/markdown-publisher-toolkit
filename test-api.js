// Test the dev.to API service directly
const testDevToAPI = async () => {
  try {
    console.log('Testing dev.to API...');

    // First, get recent articles to find a valid one
    console.log('\n=== Getting recent articles ===');
    const recentResponse = await fetch('https://dev.to/api/articles?per_page=3', {
      headers: {
        'User-Agent': 'Markdown Publisher Toolkit (verdent@codeck.ai)',
      },
    });

    if (!recentResponse.ok) {
      console.error(`❌ Failed to get recent articles: ${recentResponse.status}`);
      return;
    }

    const recentArticles = await recentResponse.json();
    console.log(`Found ${recentArticles.length} recent articles`);

    // Pick the first article for testing
    const testArticle = recentArticles[0];
    console.log(`\nTesting with article: ${testArticle.title}`);
    console.log(`URL: ${testArticle.url}`);
    console.log(`Path: ${testArticle.path}`);
    console.log(`Username: ${testArticle.user.username}`);

    // Test API call with path method
    console.log('\n=== Testing API call with path ===');
    const pathApiUrl = `https://dev.to/api/articles${testArticle.path}`;
    console.log(`API URL: ${pathApiUrl}`);

    const pathResponse = await fetch(pathApiUrl, {
      headers: {
        'User-Agent': 'Markdown Publisher Toolkit (verdent@codeck.ai)',
      },
    });

    console.log(`Response status: ${pathResponse.status}`);

    if (!pathResponse.ok) {
      console.error(`❌ Path API call failed: ${pathResponse.status} ${pathResponse.statusText}`);
      const errorText = await pathResponse.text();
      console.error('Error response:', errorText);

      // Try with ID method instead
      console.log('\n=== Testing API call with ID ===');
      const idApiUrl = `https://dev.to/api/articles/${testArticle.id}`;
      console.log(`API URL: ${idApiUrl}`);

      const idResponse = await fetch(idApiUrl, {
        headers: {
          'User-Agent': 'Markdown Publisher Toolkit (verdent@codeck.ai)',
        },
      });

      console.log(`ID Response status: ${idResponse.status}`);

      if (!idResponse.ok) {
        console.error(`❌ ID API call failed: ${idResponse.status} ${idResponse.statusText}`);
        return;
      }

      const article = await idResponse.json();
      console.log('✅ Article fetched successfully with ID method!');
      console.log(`Title: ${article.title}`);
      console.log(`Author: ${article.user.name} (@${article.user.username})`);
      console.log(`Published: ${article.published_at}`);
      console.log(`Tags: ${JSON.stringify(article.tag_list)}`);
      console.log(`Body markdown length: ${article.body_markdown.length} characters`);
      return;
    }

    const article = await pathResponse.json();
    console.log('✅ Article fetched successfully with path method!');
    console.log(`Title: ${article.title}`);
    console.log(`Author: ${article.user.name} (@${article.user.username})`);
    console.log(`Published: ${article.published_at}`);
    console.log(`Tags: ${JSON.stringify(article.tag_list)}`);
    console.log(`Body markdown length: ${article.body_markdown.length} characters`);
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
  }
};

testDevToAPI();
