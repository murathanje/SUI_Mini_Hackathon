'use client'
import Content from '@components/Content';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
               SUI Memories App
                <br className="max-md:hidden" />
        <span className="blue_gradient" style={{ fontSize: 45 }}>Send a Memory Card to the People You Love</span>
            </h1>
        <Content />
    </section>
  )
}

export default Home