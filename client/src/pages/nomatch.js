import React from "react";
 import { Col, Row, Container } from "../components/grid";
 import Jumbotron from "../components/jumbotron";

 function NoMatch() {
   return (
     <Container fluid>
       <Row>
         <Col size="md-12">
           <Jumbotron>
             <h1 className="text-center">404 no matches found try again!</h1>
           </Jumbotron>
         </Col>
       </Row>
     </Container>
   );
 }

 export default NoMatch;