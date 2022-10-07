import { $q } from './helpers/dom';

if(document.location.hash){
  $q(document.location.hash)?.scrollIntoView({ behavior: "smooth" });
}
