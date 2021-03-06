import Icon from '@ant-design/icons';

const NodejsSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 33.315 37.921'>
    <defs>
      <linearGradient
        id='b'
        x1='-.348'
        x2='1.251'
        gradientTransform='rotate(116.114 53.1 202.97) scale(86.48)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.3' stopColor='#3e863d' />
        <stop offset='.5' stopColor='#55934f' />
        <stop offset='.8' stopColor='#5aad45' />
      </linearGradient>
      <linearGradient
        id='d'
        x1='-.456'
        x2='.582'
        gradientTransform='rotate(-36.46 550.846 -214.336) scale(132.798)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.57' stopColor='#3e863d' />
        <stop offset='.72' stopColor='#619857' />
        <stop offset='1' stopColor='#76ac64' />
      </linearGradient>
      <linearGradient
        id='f'
        x1='.043'
        x2='.984'
        gradientTransform='translate(192.862 279.652) scale(97.417)'
        gradientUnits='userSpaceOnUse'>
        <stop offset='.16' stopColor='#6bbf47' />
        <stop offset='.38' stopColor='#79b461' />
        <stop offset='.47' stopColor='#75ac64' />
        <stop offset='.7' stopColor='#659e5a' />
        <stop offset='.9' stopColor='#3e863d' />
      </linearGradient>
      <clipPath id='a'>
        <path d='M239.03 226.605l-42.13 24.317a5.085 5.085 0 00-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336a5.1 5.1 0 005.09 0l42.126-24.336a5.096 5.096 0 002.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317a5.123 5.123 0 00-5.1 0' />
      </clipPath>
      <clipPath id='c'>
        <path d='M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39a5.318 5.318 0 00-1.32-.53zm0 0' />
      </clipPath>
      <clipPath id='e'>
        <path d='M241.066 225.953a5.14 5.14 0 00-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336a5.105 5.105 0 002.46-3.476l-46.18-78.89a5.29 5.29 0 00-1.03-.102c-.14 0-.28.007-.42.02' />
      </clipPath>
    </defs>
    <g clipPath='url(#a)' transform='translate(-68.564 -79.701) scale(.35278)'>
      <path
        fill='url(#b)'
        d='M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0'
      />
    </g>
    <g clipPath='url(#c)' transform='translate(-68.564 -79.701) scale(.35278)'>
      <path
        fill='url(#d)'
        d='M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0'
      />
    </g>
    <g clipPath='url(#e)' transform='translate(-68.564 -79.701) scale(.35278)'>
      <path fill='url(#f)' d='M197.02 225.934v107.43h91.683v-107.43zm0 0' />
    </g>
  </svg>
);

type Props = {
  [propName: string]: any;
};

const NodejsIcon = (props: Props) => (
  <Icon style={{ color: 'inherit' }} component={NodejsSvg} {...props} />
);

export default NodejsIcon;
