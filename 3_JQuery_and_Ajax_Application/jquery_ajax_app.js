$(document).ready(function() {
    // Event handler for the "Load Data" button
    $('#loadDataButton').click(function() {
        // AJAX request to simulate fetching data
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',  // A mock API for demonstration
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Clear any existing content in the data container
                $('#dataContainer').empty();

                // Loop through the data and display it
                data.slice(0, 5).forEach(function(post) {
                    $('#dataContainer').append(`
                        <div class="post">
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>
                        <hr>
                    `);
                });
            },
            error: function(error) {
                $('#dataContainer').html('Failed to load data.');
            }
        });
    });
});
