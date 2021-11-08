import "../index.css";
import logo from '../assets/logo.png';

const header = document.createElement('header')

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript'

const img = document.createElement('img')
img.src = logo

header.append(img)
header.append(h1)

document.body.append(header)
