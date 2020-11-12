<?php  
    if (isset($_POST['submit'])) 
    {
        $result = mysql_query("Select * From aa where email = '".$_SESSION[login_user]."'");

        if($result)
        {
            $row = mysql_fetch_array($result);
            $id = $row['id'];

            if(!is_dir("images/videos".$id.'/'))
            {
                mkdir("images/videos".$id.'/');
            }
            $target_dir = "images/videos".$id;

            // setup an array to check errors at the time of file upload
            $errors = array();

            //Loop through each file
            for($i=0; $i<count($_FILES['file']['name']); $i++) 
            {
                // set the array of allowed extensions
                $allowed =  array('mp4', 'mkv');

                // extrach the file extension and check if it is valid
                $ext = pathinfo($_FILES['file']['name'][$i], PATHINFO_EXTENSION);
                if(!in_array($ext,$allowed)) 
                {
                    $errors[] = "Invalid fiel extension.";
                }
                if(empty($errors))
                {
                    // make parts of file name to append timestamp to them to avoid uploading of files with same name
                    $path_parts = pathinfo($_FILES["file"]["name"][$i]);

                    $image_path = $path_parts['filename'].'_'.time().'.'.$path_parts['extension'];

                    //Setup our new file path
                    $newFilePath = $target_dir.'/'.$image_path;

                    //Upload the file into the temp dir
                    if(move_uploaded_file($_FILES["file"]["tmp_name"][$i], $newFilePath)) 
                    {
                        //Handle other code here
                    }
                }
                else
                {
                    print_r($errors);
                }
            }
            if(empty($errors))
            {
                echo "Success";
            }
        }
        else
        {
            echo "Error while fetching records ".mysql_error();
        }
    } 
 ?> 


<?php

if (isset($_POST['submit'])) {
    $file = $_FILES ['file'];

    $fileName = $_FILES ['file'] ['name'];
    $fileTmpName = $_FILES ['file'] ['tmp_name'];
    $fileSize = $_FILES ['file'] ['size'];
    $fileError = $_FILES ['file'] ['error'];
    $fileType = $_FILES ['file'] ['type'];

    $fileExt = explode ('.',$fileName);
  $fileActualExt = strtolower (end($fileExt));

   $allowed = array ('jpg', 'jpeg', 'png', 'pdf', 'doc');

   if (in_array($fileActualExt, $allowed)) {
       if ($fileError === 0) {
           if ($fileSize < 10000000) {
            $fileNameNew = uniqid ('', true).".".$fileActualExt;
          $fileDestination = 'upload/'.$fileNameNew;
          move_uploaded_file($fileTmpName, $fileDestination);
          header ("Location : Contact.html?uploadedsuccessfully");
        } else {
            echo "Your file is too big!";
        }  

    } else {
        echo "There was an error uploading your file!";
    } 
} else {
    echo "You cannot upload files of this type!";
}


} 