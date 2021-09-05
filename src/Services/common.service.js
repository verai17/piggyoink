class CommonServices{


    getAllImages(r) { 
        let images = {}; 
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
 

}
 
export default new CommonServices();