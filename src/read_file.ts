console.log("read file test")
import fs = require('fs');

var readStream = fs.createReadStream('package.json', {encoding: 'utf8'});

readStream.on('data', function(chunk) {  
    //console.log('\n--- new chunk ---\n')
    console.log(chunk);
}).on('end', function() {
    console.log("END OF FILE");
});
