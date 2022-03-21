import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import Projects from 'components/Projects'

export default function Home() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          tablet: {
            smooth: false,
          },
          mobile: {
            smooth: false,
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <main data-scroll-container id="scroll-container">
          <Hero />
          <Projects />
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  )
}