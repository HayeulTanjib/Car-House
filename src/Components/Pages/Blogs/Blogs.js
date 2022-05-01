import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='vh-100'>
            <h2 className='py-4'>Blogs</h2>
            <div>
                <Accordion className="w-50 text-center mx-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between Javascript and Node js</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                1. Javascript is a programming language but Node Js is runtime environment for Javascript. <br />
                                2. Javascript runs in browser but Node js runs in server.<br />
                                3. Javascript is updated version of ECMA scripts chrome's V8 engine written c++ but
                                Node JS is written C, C++ and Javascript. <br />
                                4. React JS is Javascript library on the other hand Express JS is Node JS framework. <br />
                                5. Javascript is used in frontend development on the other hand Node js used in server-side development.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                1. SQL follows RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) but NoSql is
                                Non-relational or distributed database system. <br />

                                2. Sql databse is table based but Nosql database is key value based which
                                is very similar to Json. <br />

                                3. Sql is vertically scalable but Nosql is horizontally scalable. <br />

                                4. For complex query sql is efficient but nosql is not good for complex
                                queries. <br />

                                5. For fast analytical queries sql is best in contrast nosql provides
                                flexibility and scalability.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                        <Accordion.Body>
                            <p>

                                1. JWT  is an open standard used to share security information between two parties: a client and a server. <br />

                                2. JWT can be used as an access token to prevent unwanted access to a protected resource. <br />

                                3. JWT ensure security both client and server side. <br />

                                4. JWT token has three part 1st part is header, 2nd part is payload or data and the 3rd part is
                                signature. <br />

                                5. Example: User login-registration authentication, Online ticket selling user authentication etc.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;