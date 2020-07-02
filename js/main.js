console.clear();

const width = 1000, height = 800;
// const data = ["few","ritzy","regular","freezing","spotty","perform","quaint","material","classy","wrong","practise","gruesome","remain","embarrassed","yummy","wriggle","naive","superficial","grandiose","way","knowledgeable","tacit","window","root","plate","cuddly","unable","hulking","cough","muddle","replace","tug","change","lame","wiry","glorious","anxious","anxious","anxious","murder","dangerous","tidy","impress","grass","fluffy","battle","disturbed","boundary","boundary","rate","window","quick","tug","change","lame","wiry","glorious","anxious","truck","cakes","hum","roof","gamy","rub","servant","coordinated","deserve","ring","stomach","deranged","quarter","lip","maniacal","glass","bushes","kind","friendly","irate","spring","bushes","noxious","party","test","exultant","reproduce","same","young","rustic","skate","instruct","political","try","pump","discreet","homeless","salty","vagabond","fail","depressed","zephyr","observation","fetch","undress","bake","absent","muddle","rustic","skate","instruct","political","try","pump","stain","ambiguous","celery","blade","terrible","salty","vagabond","fail","depressed","sidewalk","disarm","pollution","secret","smell","accurate","jaded","mass","ice","blind","disgusting","zipper","breath","alleged","aunt","minor","substance","horse"]
let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

const wordScale = d3.scaleLinear()
    .domain([0,75])
    .range([10,120])

const randomRotate = d3.scaleLinear()
    .domain([0,1])
    .range([-20,20]);

d3.csv("data/worddata.csv",wordCloud)

function wordCloud(data) {
    d3.layout.cloud()
        .size([500,500])
        .words(data)
        .rotate(()=>0)
        .fontSize(d=>wordScale(d.frequency))
        .on("end",draw)
        .start();
}

function draw(words) {
    const wordG = svg.append("g")
        .attr("id","wordCloudG")
        .attr("transform","translate(250,250)");

    wordG.selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size",d=>d.size +"px")
        .style("fill","#4F442B")
        .attr("text-anchor","middle")
        .attr("transform",d=>("translate(" + [d.x,d.y] +")rotate(" + d.rotate + ")"))
        .text(d=>d.text)
}

