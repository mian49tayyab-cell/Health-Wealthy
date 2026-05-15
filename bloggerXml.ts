export function generateBloggerXml() {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultmessages='false' b:layouts='false' b:responsive='true' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/axml/data' xmlns:expr='http://www.google.com/axml/expr'>
  <head>
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
    <title><data:blog.pageTitle/></title>
    <b:skin><![CDATA[
      /*
      ---------------------------------------------------------
      Theme Name: Healthy & Wealthy Premium
      Author: AI Studio
      Description: Modern Magazine Template for Blogger
      ---------------------------------------------------------
      */
      
      body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background: #fafafa;
        color: #121212;
      }
      
      .header {
        background: #fff;
        padding: 20px;
        border-bottom: 2px solid #d4af37;
        text-align: center;
      }
      
      .logo h1 {
        font-family: 'Playfair Display', serif;
        font-size: 32px;
        margin: 0;
        letter-spacing: 2px;
      }
      
      .nav {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 10px;
        background: #121212;
      }
      
      .nav a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 1px;
      }
      
      .main-content {
        max-width: 1200px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 40px;
        padding: 0 20px;
      }
      
      .post {
        background: #fff;
        border-radius: 12px;
        padding: 30px;
        margin-bottom: 30px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      
      .post h2 {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        color: #2e7d32;
      }
      
      .footer {
        background: #121212;
        color: #fff;
        padding: 60px 20px;
        text-align: center;
      }
      
      /* ADD AD PLACEMENT STYLES HERE */
    ]]></b:skin>
    
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&amp;family=Playfair+Display:wght@700&amp;display=swap' rel='stylesheet' />
  </head>
  
  <body>
    <header class='header'>
      <div class='logo'>
        <h1>HEALTHY <span style="color:#d4af37">&amp;</span> WEALTHY</h1>
        <p style="text-transform:uppercase; font-size:10px; letter-spacing:3px; color:#2e7d32">Better Health, Smarter Wealth</p>
      </div>
    </header>
    
    <nav class='nav'>
      <a href='/'>Home</a>
      <a href='/search/label/Health'>Health</a>
      <a href='/search/label/Wealth'>Wealth</a>
      <a href='/p/about-us.html'>About</a>
      <a href='/p/contact-us.html'>Contact</a>
    </nav>
    
    <div class='main-content'>
      <section class='posts'>
        <b:section id='main-posts' showaddelement='yes'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='1'>
            <b:includable id='main' var='top'>
              <b:loop values='data:posts' var='post'>
                <article class='post'>
                  <b:if cond='data:post.title'>
                    <h2><a expr:href='data:post.url'><data:post.title/></a></h2>
                  </b:if>
                  <div class='post-body'>
                    <data:post.body/>
                  </div>
                  <div class='post-footer'>
                    <span>Posted in: <data:post.labels.first.name/></span>
                  </div>
                </article>
              </b:loop>
            </b:includable>
          </b:widget>
        </b:section>
      </section>
      
      <aside class='sidebar'>
        <b:section id='right-sidebar' showaddelement='yes'>
          <b:widget id='Label1' locked='false' title='Categories' type='Label'/>
          <b:widget id='PopularPosts1' locked='false' title='Trending' type='PopularPosts'/>
        </b:section>
      </aside>
    </div>
    
    <footer class='footer'>
      <p>© 2026 Healthy &amp; Wealthy - All Rights Reserved</p>
    </footer>
  </body>
</html>`;
}
