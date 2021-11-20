export function extractInisial(nama){
    try {
        let exploded = nama.split(" ");

        if(exploded.length>=2){
            let inisial = `${exploded[0][0].toUpperCase()}${exploded[1][0].toUpperCase()}`;
            return inisial;
        }
        else{
            let inisial = `${exploded[0][0].toUpperCase()}`;
            return inisial;
        }
    
    } catch (error) {
        return "??";
    }
}