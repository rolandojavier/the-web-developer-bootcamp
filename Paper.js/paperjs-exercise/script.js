for(var i = 50; i < 1050; i+=100){
    for(var j = 50; j < 1050; j+=100){
        new Path.RegularPolygon(new Point(i, j), 7, 20).fillColor = new Color.random();
    }   
}