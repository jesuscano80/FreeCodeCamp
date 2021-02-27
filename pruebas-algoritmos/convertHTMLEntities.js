/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    str=str.split(" ");
    for (let i=0;i<str.length;i++){
      switch(str[i]){
        case "&": str[i]="&amp;";
        break;
        case "<": str[i]="&lt;";
        break;
        case ">": str[i]="&gt;";
        break;
        case '"':
            str[i] = "&quot;";
            break;
          case "'":
            str[i] = "&apos;";
            break;
  
      }
      
    }
    console.log(str.join(" "));
    return str.join(" ");
  }
  
  convertHTML("Schindler's List");