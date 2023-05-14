<main>
  <h1>My Clients Server</h1>
  <section>
    <h2>Introduction</h2>
    <p>
      My Clients Server is a backend designed to handle an user authentication
      to My Clients account process. It requests, retrieves and refresh
      authentication credentials.
    </p>
  </section>
  <section>
    <h2>Requirements</h2>
    <ul>
      <li>
        NodeJS 18^. Check NodeJs full documentation
        <a href="https://nodejs.org/en">here</a>.
      </li>
      <li>
        Valid My Clients account, otherwise, requests will return 401 error. You can
        create an account <a href="https://www.gomyclients.com/">here</a>.
      </li>
      <li>
        My Clients App, which is the frontend part of this project. Full
        documentation
        <a href="https://github.com/lnobrz/myclients-frontend">here</a>.
      </li>
    </ul>
  </section>
  <section>
    <h2>Usage</h2>
    <h3>Starting Server Locally</h3>
    <p>
      After cloning this repository, you'll need to run "npm install" on the root
      directory of this application, so all dependencies can be installed properly.
    </p>
    <p>
        On controller/auth.ts:
        <ul>
            <li>
                On requestToken controller, change the redirect uri to "http://localhost:8080/...", so the get token request can be made locally
            </li>
            <li>
                On getToken controller, change the redirect uri to "http://localhost:5173/...", so your client side application can receive and store the authentication credentials
            </li>
        </ul>
    </p>
    <p>
        Finally, run "npm start" to start running the server locally. Your server should be up and running.
      </p>
  </section>
  <section>
    <h3>Making Requests</h3>
<p>This server supports three different routes:</p>
<ul>
  <li>
    <p>
      "/": this is the index route. It makes an authentication request to My
      Clients website, where the user will be redirected and requested to login.
      After the login, server will redirect to "/get-token/" with the rights
      credentials to request an access token.
    </p>
  </li>
  <li>
    <p>
      "/get-token/": get the necessary query parameters to request an access
      token. When the access token is retrieved, server will redirect to client
      side with the credentials in the URI.
    </p>
  </li>
  <li>
    <p>
      "/refresh-token": receives an access token as query param and request a
      new valid access token. When the new access token is retrieved, server
      will return a JSON response with the new credentials.
    </p>
  </li>
</ul>
  </section>
  <section>
    <h2>Stacks</h2>
<p>My Clients Server uses the following tech stacks:</p>
<ul>
  <li>Typescript</li>
  <li>NodeJS</li>
  <li>Express</li>
</ul>
  </section>
  <section>
    <h2>Contact Me</h2>
    <p>
      Faced any problems? Don't hesitate to contact me on
      <a href="mailto:lucasnobre037@gmail.com">lucasnobre037@gmail.com</a> or
      <a href="mailto:lucasnobre37@outlook.com">lucasnobre37@outlook.com</a>.
    </p>
    
  </section>
</main>
