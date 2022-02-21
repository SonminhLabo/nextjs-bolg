
import React from 'react'
import Head from  'next/head';
import '../styles/globals.css';
import '../assets/css/style.scss';
import '../components/ModalDemo/Modal.scss';
import { AppProps } from 'next/app';

// export default function MyApp({ Component, pageProps }) {
//     return (
//       <div className="root-app">
//         <Head>
//             <link rel="stylesheet" href="/css/global.css" />
//         </Head>
//         <Component {...pageProps} />
//       </div>
//     )
    
//   }

// Cách 01

// export default class CustomApp extends React.Component<AppProps>{
//     render(){
//       return(
//           <div className="root-app">
//               <Head>
//                   <link rel="stylesheet" href="/css/global.css" />
//               </Head>
//               <this.props.Component {...this.props.pageProps} />
//           </div>
//       )
//     }
// }

//Cách 02 :

const CustomAppFC : React.FC<AppProps> = ({Component, pageProps}) => {
    return (
         <div className="root-app">
            <Head>
                {/* <link rel="stylesheet" href="/css/global.css" /> */}
            </Head>
            <Component {...pageProps} />
        </div>
    )
}
export default CustomAppFC;