import { Container, Button } from 'react-bootstrap';
import useSound from 'use-sound';
import Bite from '../sounds/bite.mp3'
import Boop from '../sounds/boop.mp3'
import Drums from '../sounds/drums.mp3'
import Dun from '../sounds/dun-dun-dun.mp3'
import Fanfare from '../sounds/fanfare.mp3'
import Glug from '../sounds/glug.mp3'
import GlugA from '../sounds/glug-a.mp3'
import GlugB from '../sounds/glug-b.mp3'
import Guitar from '../sounds/guitar-loop.mp3'
import Menu from '../sounds/menu-open.mp3'
import Meow from '../sounds/meow.mp3'
import Pfff from '../sounds/pfff.mp3'
import Plunger from '../sounds/plunger.mp3'
import Plunger2 from '../sounds/plunger-immediate.mp3'
import Pop from '../sounds/pop.mp3'
import Popdown from '../sounds/pop-down.mp3'
import Popoff from '../sounds/pop-off.mp3'
import Popon from '../sounds/pop-on.mp3'
import Popupon from '../sounds/pop-up-on.mp3'
import Popupoff from '../sounds/pop-up-off.mp3'
import Rising from '../sounds/rising-pops.mp3'
import Switchoff from '../sounds/switch-off.mp3'
import Switchon from '../sounds/switch-on.mp3'
import Sound1 from '../sounds/sound-1.mp3'
import Sound2 from '../sounds/sound-2.mp3'
import Sound3 from '../sounds/sound-3.mp3'
import Sound4 from '../sounds/sound-4.mp3'
import Sound5 from '../sounds/sound-5.mp3'
import Sound6 from '../sounds/sound-6.mp3'
import Sound7 from '../sounds/sound-7.mp3'
import Sound8 from '../sounds/sound-8.mp3'
import Sound9 from '../sounds/sound-9.mp3'
import Sound10 from '../sounds/sound-10.mp3'

export default function Sounds(){

	const [playBite] = useSound(Bite);
	const [playBoop] = useSound(Boop);
	const [playDrums] = useSound(Drums);
	const [playDun] = useSound(Dun);
	const [playFanfare] = useSound(Fanfare);
	const [playGlug] = useSound(Glug);
	const [playGlugA] = useSound(GlugA);
	const [playGlugB] = useSound(GlugB);
	const [playGuitar] = useSound(Guitar);
	const [playMenu] = useSound(Menu);
	const [playMeow] = useSound(Meow);
	const [playPfff] = useSound(Pfff);
	const [playPlunger] = useSound(Plunger);
	const [playPop] = useSound(Pop);
	const [playPopdown] = useSound(Popdown);
	const [playPopoff] = useSound(Popoff);
	const [playPopon] = useSound(Popon);
	const [playPopupon] = useSound(Popupon);
	const [playPopupoff] = useSound(Popupoff);
	const [playRising] = useSound(Rising);
	const [playSwitchoff] = useSound(Switchoff);
	const [playSwitchon] = useSound(Switchon);
	const [playSound1] = useSound(Sound1);
	const [playSound2] = useSound(Sound2);
	const [playSound3] = useSound(Sound3);
	const [playSound4] = useSound(Sound4);
	const [playSound5] = useSound(Sound5);
	const [playSound6] = useSound(Sound6);
	const [playSound7] = useSound(Sound7);
	const [playSound8] = useSound(Sound8);
	const [playSound9] = useSound(Sound9);
	const [playSound10] = useSound(Sound10);

return(

	<Container>
		<p>Sounds</p>
		<Button className='m-1' onClick={playBite}>Bite</Button>
		<Button className='m-1' onClick={playBoop}>Boop</Button>
		<Button className='m-1' onClick={playDrums}>Drums</Button>
		<Button className='m-1' onClick={playDun}>Dun</Button>
		<Button className='m-1' onClick={playFanfare}>Fanfare</Button>
		<Button className='m-1' onClick={playGlug}>Glug</Button>
		<Button className='m-1' onClick={playGlugA}>GlugA</Button>
		<Button className='m-1' onClick={playGlugB}>GlugB</Button>
		<Button className='m-1' onClick={playGuitar}>Guitar</Button>
		<Button className='m-1' onClick={playMenu}>Menu</Button>
		<Button className='m-1' onClick={playMeow}>Meow</Button>
		<Button className='m-1' onClick={playPfff}>Pfff</Button>
		<Button className='m-1' onClick={playPlunger}>Plunger</Button>
		<Button className='m-1' onClick={playPop}>Pop</Button>
		<Button className='m-1' onClick={playPopdown}>Popdown</Button>
		<Button className='m-1' onClick={playPopoff}>Popoff</Button>
		<Button className='m-1' onClick={playPopon}>Popon</Button>
		<Button className='m-1' onClick={playPopupon}>Popupon</Button>
		<Button className='m-1' onClick={playPopupoff}>Popupoff</Button>
		<Button className='m-1' onClick={playRising}>Rising</Button>
		<Button className='m-1' onClick={playSwitchoff}>Switchoff</Button>
		<Button className='m-1' onClick={playSwitchon}>Switchon</Button>
		<Button className='m-1' onClick={playSound1}>Sound1</Button>
		<Button className='m-1' onClick={playSound2}>Sound2</Button>
		<Button className='m-1' onClick={playSound3}>Sound3</Button>
		<Button className='m-1' onClick={playSound4}>Sound4</Button>
		<Button className='m-1' onClick={playSound5}>Sound5</Button>
		<Button className='m-1' onClick={playSound6}>Sound6</Button>
		<Button className='m-1' onClick={playSound7}>Sound7</Button>
		<Button className='m-1' onClick={playSound8}>Sound8</Button>
		<Button className='m-1' onClick={playSound9}>Sound9</Button>
		<Button className='m-1' onClick={playSound10}>Sound10</Button>

	</Container>

	)
}