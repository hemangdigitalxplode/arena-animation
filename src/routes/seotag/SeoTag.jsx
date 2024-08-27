import { React } from 'react';
import {Helmet} from "react-helmet";

function SeoTag(props){
const{title,description,pageURL} = props;
return(
<>
<Helmet>
<meta name="description" content={description} />
<meta name="title" content={title} />
<link rel="canonical" href={pageURL} />
</Helmet>

</>
    )
}

export default SeoTag