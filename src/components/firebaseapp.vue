<template>
    <div class="firebaseapp">
        <h1>{{ title }}</h1>
        <h3>Books list</h3>

        <h4>Add Book</h4>
        <form class="" v-on:submit.prevent="addBook">
            <label for="bookTitle">Book title: </label>
            <input type="text" id="bookTitle" v-model="newBook.title">
            <label for="bookAuthor">Book author: </label>
            <input type="text" id="bookAuthor" v-model="newBook.author">
            <label for="bookUrl">Book Url: </label>
            <input type="text" id="bookUrl" v-model="newBook.url">

            <input type="submit" value="Add Book">
        </form>
        <br><br>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books">
                    <td><a v-bind:href="book.url" target="_blank">{{ book.title }}</a></td>
                    <td>{{ book.author }}</td>
                    <td><span v-on:click="removeBook(book)">Remove Book</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Firebase from 'firebase'
    // import toastr from 'toastr'

    let config = {
        apiKey: "AIzaSyD_g4WsC-JFNJ1BdxwsWQ954x3DH_AUL3M",
        authDomain: "vuejs-firebase-8c0eb.firebaseapp.com",
        databaseURL: "https://vuejs-firebase-8c0eb.firebaseio.com",
        storageBucket: "vuejs-firebase-8c0eb.appspot.com",
        messagingSenderId: "413284052328"
    }

    let app = Firebase.initializeApp(config);
    let db = app.database();

    let booksRef = db.ref('books');

    export default {
        name: 'firebaseapp',

        firebase: {
            books: booksRef
        },

        data() {
            return {
                title: 'Firebase App',

                newBook: {
                    title: '',
                    author: '',
                    url: ''
                }
            }
        },

        methods: {
            addBook: function() {
                booksRef.push(this.newBook);
                this.newBook.title = '';
                this.newBook.author = '';
                this.newBook.url = '';
            },
            removeBook: function(book) {
                booksRef.child(book['.key']).remove();
                // toastr.success('Book removed');
            }
        }
    }
</script>

<style scoped>
table {
    border-collapse: collapse;
}
table td,
table th {
    border: 1px solid lightgray;
    padding: 5px 10px;
}
</style>
