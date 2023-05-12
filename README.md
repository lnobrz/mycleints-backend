<h1>My Clients Server</h1>
<h2>What it is?</h2>
<p>
  Welcome to My Clients Server application. This backend was made with the
  purpose of handling an user authentication in My Clients website. It handles
  the request, retrieve and refresh of an access token that is used for making
  requests on My Clients API.
</p>
<h2>Requirements</h2>
<ul>
  <li>
    My Clients server was made with NodeJS 18.14.2, so you'll need NodeJS
    installed on your machine to run the server locally. Check NodeJs full
    documentation <a href="https://nodejs.org/en">here</a>.
  </li>
  <li>
    Futhermore, this application also uses Nodemon for updating the server
    without needing to run the server over and over. You can install it globally
    or locally: it's up to you. Check Nodemon full documentation
    <a href="https://nodemon.io/">here</a>.<br />
    If you don't want to use nodemon, you can simply edit the package.json file
    in the root component: on line 7, replace the run script to "node index.ts"
    and you'll be able to run the server.
  </li>
  <li>
    Also, for the complete experience, you'll need to run My Clients Frontend
    locally. Full documentation
    <a href="https://github.com/lnobrz/myclients-frontend">here</a>.
  </li>
  <li>
    Finally, this server was designed for only working with my account
    credentials, so you'll need to have it, if you want to successfully make
    requests.
  </li>
</ul>
<h2>Usage</h2>
<h3>Starting Server Locally</h3>
<p>
After clonning this repository, you'll need to run "npm install" on the root directory of this application, so all dependencies can be installed properlly.
</p>
<p>
  Run "npm start" to start running the server locally. The default port is 8080.
</p>
<h3>Making Requests</h3>
<p>This server have support for three different routes:</p>
<ul>
  <li>
    <p>
      "/": this is the index route. It makes an authentication request to My
      Clients website, where the user will be redirected and requested to login.
      After the login, server will redirect to "/get-token/" with the rights
      credentials to request an access token.
    </p>
    <p>
      NOTE: When logging in, select "TEST account": If you choose another
      account, the response will not retrieve the locationId, which is
      neccessary to make client-side GET requests to users API.
    </p>
  </li>
  <li>
    <p>
      "/get-token/": get the neccessary query parameters to request an access
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
<h2>Stacks</h2>
<p>My Clients Server uses the following stacks:</p>
<ul>
  <li>Typescript</li>
  <li>NodeJS</li>
  <li>Express</li>
</ul>
<h2>Contact Me</h2>
<p>
  Faced any problems? Don't hesitate to contact me on
  <a href="mailto:lucasnobre037@gmail.com">lucasnobre037@gmail.com</a> or
  <a href="mailto:lucasnobre37@outlook.com">lucasnobre37@outlook.com</a>.
</p>
