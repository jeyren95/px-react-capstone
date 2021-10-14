```jsx
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Demo = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
                        <Game
                        id="pwTmgu3vFPSBNzpEKmQH%2BNxQF1lLwoHRdUdbwisdCxw%3D"
                        title="Lounge zone"
                        normalPrice="18.99"
                        salePrice="1.89"
                        imageUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/1709950/capsule_sm_120.jpg?t=1629357562"
                        savings="90.047393"
                        />
                        <Game
                        id="gP9xNx5PLXj6nwMB%2FrAD9jJ6f0w%2FGj2TOfNAgncX%2Fv8%3D"
                        title="Phantom Brave PC"
                        normalPrice="19.99"
                        salePrice="2.99"
                        imageUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/409870/capsule_sm_120.jpg?t=1599772759"
                        savings="85.042521"
                        />
                        <Game
                        id="%2F03Htn4ubTRQWZAqjctwIi3Jdk%2FBSeAAYRD6RKl6SY8%3D"
                        title="World of bombs"
                        normalPrice="18.99"
                        salePrice="1.89"
                        imageUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/1710550/capsule_sm_120.jpg?t=1629272511"
                        savings="90.047393"
                        />
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}
<Demo />

```