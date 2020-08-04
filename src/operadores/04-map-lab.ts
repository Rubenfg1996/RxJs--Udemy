import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// HACEMOS UN SCROLL ARRIBA DE LA PAGINA HORIZONTALMENTE
const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta erat at ex ornare volutpat. Aliquam egestas dictum eros, at consectetur nisi. Suspendisse ex ligula, molestie eu metus ac, interdum maximus lacus. Ut orci enim, molestie eget luctus id, ornare nec sapien. Cras in porta metus. Integer rhoncus odio justo, nec commodo tellus mattis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse pharetra turpis non dignissim bibendum. Phasellus at orci id lorem pellentesque vehicula vel nec risus. Curabitur vitae molestie lectus. Proin consequat urna mi, et condimentum est efficitur et. Aliquam non mauris congue, posuere dui et, sollicitudin nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur maximus risus, vel congue nibh pretium nec.
<br/><br/>
Nulla at lacus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut velit quis est auctor pretium vitae finibus massa. Curabitur at efficitur lectus. Vestibulum vel est sollicitudin nisi pretium aliquam eu a ligula. In fringilla fringilla sapien, blandit scelerisque turpis bibendum vitae. Ut ac ultrices magna. Pellentesque vehicula tempus metus, eu fringilla ante fringilla sed. Mauris ut ligula eu libero elementum lobortis. Suspendisse a nulla pulvinar, pellentesque nunc maximus, vehicula velit. Aenean sed dui turpis. Donec tincidunt maximus urna id convallis. Cras ac consequat magna.
<br/><br/>
Donec eget mauris mi. In lacinia luctus risus vel lacinia. Cras vel nibh a magna ullamcorper suscipit. Etiam imperdiet lacinia tortor. Proin accumsan urna commodo, interdum sem ut, interdum neque. Nam porta, purus sed convallis blandit, ipsum turpis scelerisque nunc, ut consequat mauris leo in quam. Sed convallis condimentum dictum. Nulla suscipit ullamcorper lectus, in tincidunt est. Morbi tincidunt pulvinar massa, sed volutpat ex facilisis a. Morbi pulvinar sapien diam. Donec at sagittis ex, posuere pellentesque libero. Nulla lacinia tortor ut nisi sollicitudin maximus. Vivamus rutrum, leo vitae facilisis ornare, nulla enim porta nunc, nec malesuada tellus mauris sed orci. Cras vel iaculis ipsum. Nullam non ultricies metus.
<br/><br/>
Aliquam ac tristique augue, ac convallis nunc. Quisque sit amet elit ut ex fermentum lacinia. Nulla felis lectus, gravida ac tempor ut, aliquet at ante. Ut mauris justo, pellentesque ac nunc sit amet, aliquam lobortis nibh. Aliquam erat volutpat. Nullam sed convallis ante, a luctus neque. Pellentesque ante est, volutpat ac aliquam et, fermentum vulputate dui. Quisque nec ipsum et quam efficitur dictum. Quisque risus dui, aliquam fermentum nulla quis, congue pellentesque urna. Vestibulum purus ligula, dictum eu lectus id, convallis vestibulum augue. Aenean tempor scelerisque ligula, a ullamcorper ligula ullamcorper eget. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus id dictum lacus. Vestibulum vel finibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Suspendisse in accumsan quam. In eget sem faucibus, pharetra arcu eu, elementum diam. Pellentesque nisi lorem, tincidunt nec arcu vitae, pretium facilisis ex. Vivamus ac pharetra lorem. Donec auctor aliquam convallis. Sed sagittis turpis vel mi fringilla vestibulum. Duis ut ipsum ut justo tincidunt mollis sit amet ut libero. Mauris elementum velit in felis aliquet, sed scelerisque lectus scelerisque. Etiam sit amet maximus libero. Morbi lectus metus, finibus mattis vestibulum interdum, venenatis aliquet dui. Sed convallis et purus in tempor. Cras nec vulputate magna, eu cursus ex. Nunc finibus vehicula mauris, id congue sapien. Donec ut posuere quam.`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
// MAP emite el valor que recibe pasado por la funcion que tiene dentro
// TAP emite el valor recibido pasando por la operacion que tenga dentro

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap( console.log)

);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});