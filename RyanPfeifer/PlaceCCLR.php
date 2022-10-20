<?php
//connect using servername, account username, account password, and database
$db = new mysqli("localhost", "web", "Rm6D?PKBy&K3QhJ!", "CCLR");
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

//Checks to make sure all three fields are filled, then changes the sql statement
if (!empty($_POST['sec'])){
  if (!empty($_POST['twn'])){
    if (!empty($_POST['rge'])){
      $sql = "SELECT * FROM `cclr2` WHERE SEC = ? AND TSP = ? AND RGE = ?";
    } else {
      echo "Fields are required.";
      $db->close();
      exit();
    }
  } else {
    echo "Fields are required.";
    $db->close();
    exit();
  }
} else {
  echo "Fields are required.";
  $db->close();
  exit();
}

//prepare & execute
$stmt = $db->prepare($sql);
$sec = $_POST['sec'];
$twn = $_POST['twn'];
$rge = $_POST['rge'];
$stmt->bind_param("sss", $sec,$twn,$rge);
$stmt->execute();
//Display the results in an html table
$result = $stmt->get_result();
if ($result->num_rows > 0) {
  echo "<table><tr><th>Date</th><th>Name</th><th>Section, Township, Range</th></tr>";  
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>".$row["DATE"]."</td><td>".$row["LastNameGrantee_1"]."</td><td>".$row["SEC"]." ".$row["TSP"]." ".$row["RGE"]."</td></tr>";
  }
  echo "</table>";
} else {
  echo "Double check spelling and try again.";
}
$db->close();
?>