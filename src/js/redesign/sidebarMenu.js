import { $qa } from '../helpers/dom';

const currentPath = location.pathname;

$qa(`.nav-sidebar a[href="${currentPath}"]`).map(a => a.classList.add('active'));