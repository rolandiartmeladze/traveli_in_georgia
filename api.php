
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the data from the form
    $name = $_POST['name'];
    $email = $_POST['mile'];
    $age = $_POST['age'];
    $username = $_POST['user'];

    // Get the current date and time
    $current_datetime = date('d-m-Y');

    // Save the uploaded image to the /img directory with a random name between 0 and 5
    $img_name = rand(0, 10000) . '.jpg';
    $img_path = 'img/' . $img_name;
    move_uploaded_file($_FILES['photo']['tmp_name'], $img_path);

    // Create an associative array with the user's data, the current date and time, and the image path
    $newUserData = array(
        "Name" => $name,
        "Email" => $email,
        "Age" => $age,
        "Username" => $username,
        "Datetime" => $current_datetime,
        "Image" => $img_path
    );

    // Read the existing data from the mine.json file
    $data = json_decode(file_get_contents('mine.json'), true);

    // Add the new user data to the existing "Person" array
    $data["Person"][] = $newUserData;

    // Write the updated data back to the mine.json file
    file_put_contents('mine.json', json_encode($data, JSON_PRETTY_PRINT));

    // Display the uploaded image
    echo '<img src="' . $img_path . '">';

    // Redirect back to the form
    header('Location: index.html');
    exit;
}
?>
