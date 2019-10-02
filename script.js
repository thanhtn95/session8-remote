let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let input = document.getElementById("input");

function Remote(tv) {
    this.tv = tv;
    this.turnOnOff = function () {
        if(this.tv.status == false){
            this.tv.status = true;
        }else this.tv.status = false;

        p1.innerText ="Status: "+this.tv.status;
        p3.innerText ="Volume: "+this.tv.vol;
        p2.innerText ="Volume: "+this.tv.channel;
    }
    this.changeVol = function () {
        let vol = input.value;
        this.tv.changeVol(vol);
        p3.innerText ="Volume: "+this.tv.vol;
    }
    this.changeChannel = function () {
        let channel = input.value;
        this.tv.changeChannel(channel);
        p2.innerText ="Volume: "+this.tv.channel;
    }
}

function Tv(channel,vol,status) {
    this.channel = channel;
    this.vol = vol;
    this.status = status;
    this.changeChannel = function (channel) {
        this.channel = channel;
    }
    this.changeVol = function (vol) {
        this.vol = vol;
    }
}
let tv= new Tv(7,35,false);
let remote = new Remote(tv);
