import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Card from 'components/card'
import NavBar, {NavOptions} from 'components/navbar'

const navigationBar: Array<NavOptions> = [{text: "Login", link: "/login"}, {text: "Signup", link: "/signup"}];

export default function Home() {
  return (
    <>
      <Head>
        <title>Graphy</title>
        <meta name="description" content="Graph your data" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <div>

			<video autoPlay muted loop id="backgroundVideo">
				<source src="/video-1.mp4" type="video/mp4" />
			</video>
			
			<NavBar navOptions={navigationBar}/>

			<div class="content"> 
				<Card cardHeader="What?" cardInfo="
				Graphy is a small project application created to facilitate online graph visualization of csv files 
				"/>

				<Card cardHeader="Why?" cardInfo="I wanted to write something where I control my data, and can visualize it how I want."/>
				
				<Card cardHeader="How?"	cardInfo="Built on top of NextJs, Typescript, and my Rails Server."/>
			</div>

		</div>
    </>
  )
}

