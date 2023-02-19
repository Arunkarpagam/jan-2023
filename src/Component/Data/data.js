import React, { useState } from "react";
import './food-data.css';
function Food() {
    const store = [

        {
            Albumid: 2,
            id: 1,
            key: "non-veg",
            name: "mutton-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹140",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 2,
            key: "non-veg",
            name: "nalli",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹100",
            rating: "4.4 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 3,
            key: "non-veg",
            name: "chicken-curry",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹80",
            rating: "4.2 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 4,
            key: "non-veg",
            name: "gril-chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹160",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 5,
            key: "non-veg",
            name: "chicken-rice",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹140",
            rating: "4.1 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 6,
            key: "non-veg",
            name: "chicken biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹220",
            rating: "4.8 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 7,
            key: "non-veg",
            name: "chicken-bakoda",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹100",
            rating: "4.6 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 8,
            key: "non-veg",
            name: "Aambur-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹160",
            rating: "4.8 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 9,
            key: "non-veg",
            name: "Dindukal-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹140",
            rating: "4.7 / 5",
            url: "",
        },
        {
            Albumid: 2,
            id: 10,
            key: "non-veg",
            name: "gril-chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹100",
            rating: "4.6 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 11,
            key: "chinese",
            name: "noodles",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$70",
            rating: "4.7 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 12,
            key: "chinese",
            name: "crunch-noodle",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$160",
            rating: "4.5 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 13,
            key: "chinese",
            name: "spicy chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$240",
            rating: "4.5 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 14,
            key: "chinese",
            name: "special noodles",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$110",
            rating: "4.6 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 15,
            key: "chinese",
            name: "hot noodles",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$130",
            rating: "4.8 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 16,
            key: "chinese",
            name: "chinese chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$190",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 17,
            key: "chinese",
            name: "crisp rice bowl",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$180",
            rating: "4.5 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 18,
            key: "chinese",
            name: "rice bowl",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$190",
            rating: "4.7 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 19,
            key: "chinese",
            name: "chinese chicken gravy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$310",
            rating: "4.9 / 5",
            url: "",
        },
        {
            Albumid: 3,
            id: 20,
            key: "western",
            name: "veg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$120",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 21,
            key: "western",
            name: "western-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$320",
            rating: 4.9 / 5,
            url: "",
        },
        {
            Albumid: 4,
            id: 22,
            key: "western",
            name: "western pack",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$499",
            rating: "4.6 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 23,
            key: "western",
            name: "half beef",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$420",
            rating: "4.7 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 24,
            key: "western",
            name: "burger",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$120",
            rating: "4.5 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 25,
            key: "western",
            name: "chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$180",
            rating: "4.4 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 26,
            key: "western",
            name: " rice with shambor",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$190",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 27,
            key: "western",
            name: "bread & egg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$70",
            rating: "4.6 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 28,
            key: "western",
            name: "0mplate",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$70",
            rating: "4.7 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 29,
            key: "western",
            name: "bred omplate",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$120",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 4,
            id: 30,
            key: "western",
            name: "slice beef",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$320",
            rating: "4.6 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 31,
            key: "veg",
            name: "barotta",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹70",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 32,
            key: "veg",
            name: "dosa",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹40",
            rating: "4.1 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 33,
            key: "veg",
            name: "fish",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹150",
            rating: "4.4 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 34,
            key: "veg",
            name: "chickgen qurea",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹90",
            rating: "4.3 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 35,
            key: "veg",
            name: "rice with sappati",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹80",
            rating: "4.0 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 36,
            key: "veg",
            name: "pizza",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹60",
            rating: "4.4 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 37,
            key: "veg",
            name: "veg-biriyani(special)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹160",
            rating: "5 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 38,
            key: "veg",
            name: "Hytrabad biryani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹110",
            rating: "4.2 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 39,
            key: "veg",
            name: "sampar",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹50",
            rating: "4.4 / 5",
            url: "",
        },
        {
            Albumid: 1,
            id: 40,
            key: "veg",
            name: "family-pack",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹90",
            rating: "4.2 / 5",
            url: "",
        },
    ]
    const [data, setData] = useState(store)
    function india(item) {
        const india = store.filter((e) => e.key === item)
        setData(india);
    }
    function china(item) {
        const china = store.filter((e) => e.key === item)
        setData(china);
    }
    function wes(item) {
        const wes = store.filter((e) => e.key === item)
        setData(wes);
    }
    function veg(item) {
        const veg = store.filter((e) => e.key === item)
        setData(veg);
    }
    function all(item) {
        const all = store.filter((e) => e.key)
        setData(all);
    }

    return (
        <div>
            <div className="menu-tabs p-4 d-flex justify-content-around">
                <button className="btn btn-warning" onClick={() => wes("western")}>western</button>
                <button className="btn btn-warning" onClick={() => veg("veg")}>veg</button>
                <button className="btn btn-warning" onClick={() => india("non-veg")}>non-veg</button>
                <button className="btn btn-warning" onClick={() => china("chinese")}>chinese</button>
                <button className="btn btn-warning" onClick={() => all("all")}>all</button>

            </div>
            <div className=" p-5 gap-4" id="dises">{data.map((e) => {
                return (
                    <div id="images">
                        <img src={e.url} />
                        <name name={e.name}
          

          
                )
                
            })}
            </div>

        </div>


    )
}
export default Food