import { useApiData } from "../Hooks/useApiData"
import { useCaptcha } from "../Hooks/useCaptcha";
import { useSentenceCase } from "../Hooks/useSentenceCase";
import { useSorting } from "../Hooks/useSorting";


export function CustomHookDemo () {
    const [Categories] = useApiData('http://fakestoreapi.com/products/categories');
    const [products] =useApiData("http://fakestoreapi.com/products");
    const Code = useCaptcha();
    const sentence = useSentenceCase('anuP kUMAr sWAin');
    const sorteddata = useSorting(['odisha','bhadrak','dhenkanal','keonjhar'])

    return(
        <div className="container-fluid">
            <h1>Data Sorting</h1>
             <p>{sorteddata}</p>
            <hr/>
            <h1>Sentence case</h1>
            <p>{sentence}</p>
            <hr/>
            <h2>User login</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type='text' /></dd>
                <dt>Password</dt>
                <dd><input type='password' /></dd>
                <dt>Captcha</dt>
                <dd>{Code}</dd>
                <button>Login</button>
            </dl>
            <hr/>
            <h3>Categories</h3>
            <ol>
                {
                    Categories.map((category)=>{
                        <li key={category}>{category}</li>
                    })
                }
            </ol>
            <hr/>
            <h3>Products</h3>
            <ol>
                {
                    products.map(product=>{
                        <li key={product}>{product}</li>
                    })
                }
            </ol>

        </div>
    )
}