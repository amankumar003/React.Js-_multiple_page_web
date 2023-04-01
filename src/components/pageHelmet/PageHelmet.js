/* PageHelmet.js - page's meta tags update component for the TRON */

/* Copyright (c) 2019-2020, Localytee, LLC */

/*
modification history
--------------------
01f,02feb22,pwn  added APP_LOGO_URL.
01e,07nov22,pwn  logo url changes.
01d,20nov21,pwn  added metaTagsUpdt().
01c,02nov21,pwn  modified for SSR.
01b,29sep21,pwn  removed creatorName.
01a,28sep20,pwn  created.
*/

/*
DESCRIPTION
This file is thepage's meta tags update component for TRON.
*/

/* Imports */
import React from "react";
import { Helmet } from "react-helmet";
// import MetaTags from 'react-meta-tags';
import Global from "../../config/Global";

class PageHelmet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            called: false
        }
    }

    /*******************************************************************************
    *
    * getUrl - helps to get current url.
    *
    * This function returns the current url of page.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    getUrl() {
        return window.location.href;
    }


    /*******************************************************************************
    *
    * metaTagsUpdt - helps to update meta tags.
    *
    * This function helps to update meta tags.
    *
    * RETURNS: N/A
    *
    * ERRNO: N/A
    *
    * SEE_ALSO: N/A
    */
    metaTagsUpdt(creatorName, title, description, icon) {
        this.setState({ called: true })
        return <>
            <Helmet>
                <title>{title + " - " + Global.WEB_SITE_NAME}</title>
                <meta name="title" content={`${title} - ${Global.WEB_SITE_NAME}`} />
                <meta name="description"
                    content={description} />
                <meta name="image"
                    content={icon} />

                {/* Google / Search Engine Tags */}
                <meta itemprop="name" content={`${title} - ${Global.WEB_SITE_NAME} `} />
                <meta itemprop="description" content={description} />
                <meta itemprop="image" content={icon} />


                {/* <!-- Open Graph / Facebook --> */}
                <meta property="fb:app_id" content={Global.FACEBOOK_CLIENT_ID} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={this.getUrl()} />
                <meta property="og:title" content={`${title} - ${Global.WEB_SITE_NAME} `} />
                <meta property="og:description"
                    content={description} />
                <meta property="og:image" content={icon} />

                {/* whtsapp  */}
                {/* <meta property="og:image" itemprop="image" content={icon} /> */}
                <meta property="og:locale" content="en_GB" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={this.getUrl()} />
                <meta property="twitter:title" content={`${title} - ${Global.WEB_SITE_NAME}`} />
                <meta property="twitter:description"
                    content={description} />
                <meta property="twitter:image" content={icon} />

                {/* <!-- Favicons --> */}
                <link rel="apple-touch-icon" sizes="180x180" href="https://quession.com/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://quession.com/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://quession.com/favicon/favicon-16x16.png" />
                <link rel="icon" type="image/x-icon" href="https://quession.com/favicon/favicon.ico" />
                <link rel="manifest" href="https://quession.com/favicon/site.webmanifest" />
            </Helmet>
            {/*   <Helmet>
                    <meta charSet="utf-8" />
                    <title>{creatorName} on {Global.WEB_SITE_NAME}: "{title}"</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta
                        name="description"
                        content={description}
                    />

                    <link rel="apple-touch-icon" href={icon} />
                    <link rel="apple-touch-icon" sizes="72x72" 
                    href={icon} />
                    


                    
                </Helmet> */}


            {/*  <div className="wrapper">
                    <MetaTags>
                        <title>Page 1</title>
                        <meta name="description" content="Some description." />
                        <meta property="og:title" content="MyApp" />
                        <meta property="og:image" content="path/to/image.jpg" />
                    </MetaTags>
                    <div className="content"> Some Content </div>
                </div> */}


        </>
    }
    render() {
        let { creatorName, title, description, icon } = this.props;
        if (icon === null)
            icon = Global.APP_LOGO_URL;

        return (
            <>
                <Helmet>
                    <title>{title + " - " + Global.WEB_SITE_NAME}</title>
                    <meta name="title" content={`${title} - ${Global.WEB_SITE_NAME}`} />
                    <meta name="description"
                        content={description} />
                    <meta name="image"
                        content={icon} />

                    {/* Google / Search Engine Tags */}
                    <meta itemprop="name" content={`${title} - ${Global.WEB_SITE_NAME} `} />
                    <meta itemprop="description" content={description} />
                    <meta itemprop="image" content={icon} />


                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="fb:app_id" content={Global.FACEBOOK_CLIENT_ID} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={this.getUrl()} />
                    <meta property="og:title" content={`${title} - ${Global.WEB_SITE_NAME} `} />
                    <meta property="og:description"
                        content={description} />
                    <meta property="og:image" content={icon} />

                    {/* whtsapp  */}
                    {/* <meta property="og:image" itemprop="image" content={icon} /> */}
                    <meta property="og:locale" content="en_GB" />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={this.getUrl()} />
                    <meta property="twitter:title" content={`${title} - ${Global.WEB_SITE_NAME}`} />
                    <meta property="twitter:description"
                        content={description} />
                    <meta property="twitter:image" content={icon} />

                    {/* <!-- Favicons --> */}
                    <link rel="apple-touch-icon" sizes="180x180" href="https://quession.com/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="https://quession.com/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="https://quession.com/favicon/favicon-16x16.png" />
                    <link rel="icon" type="image/x-icon" href="https://quession.com/favicon/favicon.ico" />
                    <link rel="manifest" href="https://quession.com/favicon/site.webmanifest" />
                </Helmet>
            </>
        );
    }
}
export default PageHelmet;
