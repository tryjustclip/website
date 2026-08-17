const http = require('http');

const routes = [
  '/',
  '/services',
  '/services/web-development',
  '/services/ui-ux-design',
  '/services/backend-api',
  '/services/ai-chatbots',
  '/services/automation',
  '/services/support-scaling',
  '/work',
  '/work/nexus-flow',
  '/work/cloudpulse',
  '/work/omniroute',
  '/work/strata-design-system',
  '/about',
  '/process',
  '/start-project',
  '/insights',
  '/careers',
  '/privacy',
  '/terms',
  '/some-non-existent-route'
];

async function testRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          route,
          statusCode: res.statusCode,
          byteLength: Buffer.byteLength(data),
          hasTitle: data.includes('<title>') || data.includes('Stickbyte')
        });
      });
    }).on('error', (err) => {
      resolve({ route, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing Stickbyte routes on http://localhost:3000...\n');
  for (const r of routes) {
    const result = await testRoute(r);
    if (result.error) {
      console.log(`❌ ${r}: ERROR - ${result.error}`);
    } else {
      const statusIcon = (result.statusCode === 200 || (r.includes('non-existent') && result.statusCode === 404)) ? '✅' : '⚠️';
      console.log(`${statusIcon} ${r.padEnd(30)} -> HTTP ${result.statusCode} (${result.byteLength} bytes)`);
    }
  }
}

run();
