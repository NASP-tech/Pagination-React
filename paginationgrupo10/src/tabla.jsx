import React, {Component} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Global from "./Global";
import axios from 'axios';
import { Button } from "@mui/material";


const token =
'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOYXRhbGlhIFNvbCIsImV4cCI6MTY1Njg3NDg3NywiaWF0IjoxNjU1NTc4ODc3fQ.iTXoViqBho8vjCtz_XRTmzVRPybqvy8OWBKJY33f7N3bgPqfTaydYDHDBdFbwtC-LKE_O8blMTQM9zEPgRwoSg'

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export default class AdminMaintenanceTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      book: [],
      search: "",
      currentPage: 1,
      booksPerPage: 5
    };
  }

  

  componentDidMount(){
    this.findAllBooks(this.state.currentPage);
  }

  findAllBooks(currentPage) {
    currentPage -= 1;
    axios
      .get(
        "http://localhost:8080/library/books?page=" +
        currentPage +
        "&limit=" +
        this.state.booksPerPage, config
      )
      .then(({data}) => {
        console.log(data);
        this.setState({
          books: data,
          currentPage: currentPage + 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchData = (currentPage) => {
    currentPage -= 1;
    axios
      .get(
        "http://localhost:8080/library/books?page=" +
        currentPage +
        "&limit=" +
        this.state.booksPerPage, config
      )
      .then(({ data }) => {
        this.setState({
          books: data,
          currentPage: currentPage + 1,
        });
      })
  };


  prevPage = () => {
    let prevPage = 1;
    if (this.state.currentPage > prevPage) {
      this.findAllBooks(this.state.currentPage - prevPage);
    }
  };

  nextPage = () => {
    this.findAllBooks(this.state.currentPage + 1);
  };

  render(){
    const { books, currentPage, totalPages, search } = this.state;
    return (
    <div>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'auto', maxWidth: '88%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ISBN</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Publish Date</TableCell>
            <TableCell align="center">Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{book.isbn}</TableCell>
              <TableCell align="center">{book.title}</TableCell>
              <TableCell align="center">{book.publish_date}</TableCell>
              <TableCell align="center">{book.stock}</TableCell>
              <TableCell align="center">
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Button
    onClick={() => this.prevPage()}
    > Atras</Button>

    <Button
    onClick={() => this.nextPage()}
    > Siguiente</Button>
    </div>
  )
}
}