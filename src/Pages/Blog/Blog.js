import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';


const Blog = () => {
    return (
        <div>
            <h2 className="font-semibold text-center mt-5 mb-8">Frequently Asked Questions</h2>
            <div>
            <Accordion className='accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='font-bold fs-3'>What is Cors?</Accordion.Header>
                    <Accordion.Body>
                        <strong>Cross-Origin Resource Sharing (CORS)</strong> <br />
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <strong>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</strong> <br />
                        Firebase Authentication <strong>provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app</strong>. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component <strong>renders child components ( children ) if the user is logged in</strong>. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        `Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. <br />
                        It is <strong>a used as backend service where javascript works on the server-side of the application</strong>. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
    );
};

export default Blog;