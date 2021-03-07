import React, { Component } from "react";
import API from "../utils/api";
import Jumbotron from "../components/jumbotron";
import Book from "../components/book";
import Card from "../components/card";
import Footer from "../components/footer";
import Form from "../components/form";
import { Col, Row, Container } from "../components/grid";
import { List } from "../components/list";

 class Home extends Component {
   state = {
     books: [],
     q: "",
     message: "Search for a book"
   };

   getBooks = () => {
     API.getBooks(this.state.q)
       .then(res =>
         this.setState({
           books: res.data
         })
       )
       .catch(() =>
         this.setState({
           books: [],
           message: "No books found"
         })
       );
   };



   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };



   handleFormSubmit = event => {
     event.preventDefault();
     this.getBooks();
   };

   handleBookSave = id => {
     const book = this.state.books.find(book => book.id === id);

     API.saveBook({
       id: book.id,
       title: book.volumeInfo.title,
       subtitle: book.volumeInfo.subtitle,
       link: book.volumeInfo.infoLink,
       authors: book.volumeInfo.authors,
       description: book.volumeInfo.description,
       image: book.volumeInfo.imageLinks.thumbnail
     }).then(() => this.getBooks());
   };

   render() {
     return (
       <Container>
         <Row>
           <Col size="md-12">
             <Jumbotron>
               <h1 className="text-center">
                 <strong>(React) Search Google Books </strong>
               </h1>
               <h2 className="text-center">Use this app to search for and save books of interest.</h2>
             </Jumbotron>
           </Col>
           <Col size="md-12">
             <Card title="Book Search" icon="far fa-book">
               <Form
                 handleInputChange={this.handleInputChange}
                 handleFormSubmit={this.handleFormSubmit}
                 q={this.state.q}
               />
             </Card>
           </Col>
         </Row>
         <Row>
           <Col size="md-12">
             <Card title="Results">
               {this.state.books.length ? (
                 <List>
                   {this.state.books.map(book => (
                     <Book
                       key={book.id}
                       title={book.volumeInfo.title}
                       subtitle={book.volumeInfo.subtitle}
                       link={book.volumeInfo.infoLink}
                       authors={book.volumeInfo.authors.join(", ")}
                       description={book.volumeInfo.description}
                       image={book.volumeInfo.imageLinks.thumbnail}
                       Button={() => (
                         <button
                           onClick={() => this.handleBookSave(book.id)}
                           className="btn btn-primary ml-2"
                         >
                           Save
                         </button>
                       )}
                     />
                   ))}
                 </List>
               ) : (
                 <h2 className="text-center">{this.state.message}</h2>
               )}
             </Card>
           </Col>
         </Row>
         <Footer />
       </Container>
     );
   }
 }

 export default Home;