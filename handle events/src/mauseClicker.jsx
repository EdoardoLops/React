export function MauseClicker(){
    function button1(event){
        console.log(event.target.name);
    }

    function button2(event){
        console.log(event.target);
        
    }

    return (
      <div>
        <button name="one" onClick={button1}>
          click me!
        </button>
        <button name="two" onClick={button2}>click me!
          <img style={{width: 24, height: 24}}
            src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-pm1cary85vjb1.jpg?width=755&format=pjpg&auto=webp&s=cb9b202f3307b50dc79ebcf33cb6c1277aee88b9"
            alt=""
          />
        </button>
      </div>
    );
}