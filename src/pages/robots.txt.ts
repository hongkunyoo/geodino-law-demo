/**
 * 예시 사이트: 검색엔진은 noindex 메타를 볼 수 있게 열어 두고, 메타 태그를 따르지 않을 수 있는 AI 수집 프로그램은 막는다.
 * 실제 고객 사이트(demo: false): 모두 허용한다.
 */
import type { APIRoute } from 'astro';
import { office } from '@/config/office';

const AI_CRAWLERS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'CCBot'];

export const GET: APIRoute = () => {
  const lines = office.demo
    ? [...AI_CRAWLERS.flatMap((agent) => [`User-agent: ${agent}`, 'Disallow: /', '']), 'User-agent: *', 'Allow: /']
    : ['User-agent: *', 'Allow: /'];
  return new Response(`${lines.join('\n')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
