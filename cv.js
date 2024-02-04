function downloadPDF() {
    // Assuming your PDF file is named "example.pdf"
    var pdfUrl = "Sachin Thilakarathna..pdf";
  
    // Create a temporary link element
    var link = document.createElement('a');
    
    // Set the href attribute with the PDF file URL
    link.href = pdfUrl;
    
    // Set the download attribute to specify the file name to be downloaded
    link.download = "Sachin Thilakarathna..pdf";
    
    // Append the link to the document body
    document.body.appendChild(link);
    
    // Trigger a click event on the link element to start the download
    link.click();
    
    // Remove the link from the document body after the download starts
    document.body.removeChild(link);
  }