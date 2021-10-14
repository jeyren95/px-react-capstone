import { Button } from "components/button";
import { Link } from "react-router-dom";

export const Game = ({ id, title, normalPrice, salePrice, imageUrl, savings }) => {

    return (
        <div className="relative flex flex-col">
            <div className="
                  group
                  block
                  w-full
                  rounded-lg
                  bg-gray-100
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-offset-gray-100
                  overflow-hidden
                "
            >
                <img className="w-full" src={imageUrl} alt="" />
            </div>
            <div className="
                  flex-1 flex
                  md:flex-col
                  justify-between
                  items-start
                  md:items-stretch
                  gap-3
                  px-2
                "
            >
                <div className="mt-1 flex-1">
                    <div className="flex justify-between items-center gap-3 mb-3">
                        <div>
                            USD
                            <span className="text-decoration: line-through ml-1">{normalPrice}</span>
                            <span className="text-2xl font-bold ml-3">{salePrice}</span>
                        </div>
                        <div className="text-sm font-bold text-green-500">Save up to {Math.floor(Number(savings))}%!</div>
                    </div>
                        <p className="
                            block
                            text-md
                            font-medium
                            text-gray-900
                            truncate
                            pointer-events-none
                            "
                        >
                            {title}
                        </p>
                </div>
                <div className="flex flex-col md:flex-row gap-3 py-3">
                    <Link to={`/games/${id}`}>
                        <Button
                        type="button"
                        variant="primary"                
                        >
                            LEARN MORE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}