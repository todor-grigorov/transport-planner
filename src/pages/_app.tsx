import MainLayout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Next SEO Example"
        description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
