<script>
var consonants = 
    ["b","c","d","f","g","h","j","k","l","m","n",
    "p","q","r","s","t","v","w","x","y","z"];
var vowels = ["a","e","i","o","u","y"];
var superVowels = ["a","e","i","o","u","y","",
     "","","","",""];
function ranChar(array){
    return array[Math.floor(Math.random()*array.length)];
}
while(confirm(
    ranChar(consonants).toUpperCase()
    + ranChar(vowels)
    + ranChar(consonants)
    + ranChar(superVowels)
));
</script>
