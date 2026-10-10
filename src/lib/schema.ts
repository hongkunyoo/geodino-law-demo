/**
 * 구조화 데이터(JSON-LD). 화면에 보이는 내용과 같은 값만 쓴다 (office.ts 한 곳에서 온다).
 */
import type { Faq, Office } from '@/config/office';

type JsonLd = Record<string, unknown>;

export function legalServiceSchema(office: Office): JsonLd {
  const lawyerId = `${office.siteUrl}/#lawyer`;
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${office.siteUrl}/#office`,
    name: office.name,
    description: office.summary,
    url: `${office.siteUrl}/`,
    telephone: office.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressRegion: office.contact.postal.region,
      addressLocality: office.contact.postal.locality,
      streetAddress: office.contact.postal.street,
      postalCode: office.contact.postal.postalCode,
    },
    areaServed: office.region,
    openingHours: office.contact.openingHours,
    knowsAbout: office.practiceAreas.flatMap((area) => area.matters),
    employee: {
      '@type': 'Person',
      '@id': lawyerId,
      name: office.lawyer.name,
      jobTitle: office.lawyer.role,
      worksFor: { '@id': `${office.siteUrl}/#office` },
    },
    sameAs: office.channels.map((channel) => channel.url),
    dateModified: office.updatedAt,
  };
}

export function faqSchema(faqs: Faq[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer.join(' ') },
    })),
  };
}
