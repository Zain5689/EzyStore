<div className="grid grid-cols-12 gap-8">
  <div className="col-span-1">
    <div className="flex flex-col gap-4">
      {Array.isArray(product?.images) && product.images.length > 0 ? (
        product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 border-2 rounded-lg overflow-hidden transition ${
              selectedImage === index ? "border-[#CC7700]" : "border-gray-300"
            }`}
          >
            <img
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
            />
          </button>
        ))
      ) : (
        <p className="text-gray-500">No images available</p>
      )}
    </div>
  </div>

  {/* Main Image */}
  <div className="col-span-5">
    <img
      src={
        product.images?.[selectedImage] || product.image || "/placeholder.svg"
      }
      alt={product.name}
      className="w-full rounded-lg"
    />
  </div>

  {/* Product Details */}
  <div className="col-span-6 space-y-2">
    <h1 className="text-[42px] font-medium text-[#000000]">{product.name}</h1>
    <p className="text-2xl text-[#9F9F9F]">US. {product.price}</p>

    {/* Rating */}
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            fill={i < Math.floor(product.rating) ? "#FFB800" : "none"}
            className="text-[#FFB800] mx-1"
          />
        ))}
      </div>
      <span className="text-[#9F9F9F] text-[20px]">
        <span className="mx-4">|</span> {product.reviewCount} Customer Review
      </span>
    </div>
    <div>
      <p>
        SIM Card: Single SIM (Nano-SIM)
        <br />
        Scree 6.9 inches, 1320 x 286 pixels <br />
        RAM: 8GB <br />
        Internal memory: 1TB <br />
        Rear Camera: Triple: 48 MP + 12 MP + 48 MP <br />
        Selfie Camera:12 MP <br />
        Color: Black Titanium
      </p>
    </div>

    {/* Specifications */}
    <div className="space-y-2 text-sm text-gray-600">
      {product.specs?.map((spec, index) => (
        <p key={index}>{spec}</p>
      ))}
    </div>

    {/* Type Selection */}
    <div>
      <p className="text-gray-600 mb-2">Type</p>
      <div className="flex gap-2">
        {product.types?.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-1 rounded ${
              selectedType === type
                ? "bg-[#CC7700] text-white"
                : "bg-[#F5F5F5] text-gray-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div>
        <ul className="flex gap-2 cursor-pointer">
          <li className="text-white bg-[#B88E2F] p-2 rounded-md">Pro</li>
          <li className="text-[16px] bg-[#F9F1E7] p-2 rounded-md">Max</li>
          <li className="text-[16px] bg-[#F9F1E7] p-2 rounded-md">s</li>
        </ul>
      </div>
    </div>

    {/* Color Selection */}
    <div>
      <p className="text-gray-600 mb-2">Color</p>
      <div className="flex gap-2">
        {product.colors?.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-full ${
              selectedColor === color ? "ring-2 ring-[#CC7700]" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="flex gap-4 my-4">
        <span className="w-10 h-10 rounded-full bg-[#96AEC6]"></span>
        <span className="w-10 h-10 rounded-full bg-[#000]"></span>
        <span className="w-10 h-10 rounded-full bg-[#616161]"></span>
      </div>
    </div>

    {/* Quantity and Buttons */}
    <div className="flex gap-4 mb-10">
      <div className="flex border border-[#9F9F9F] rounded-2xl">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-2 py-4"
        >
          <Minus size={16} />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-14 text-center "
        />
        <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-4">
          <Plus size={16} />
        </button>
      </div>
      <button className=" text-black rounded-2xl border px-4 py-2">
        Add To Cart
      </button>
      <button className="px-6 border rounded-2xl ">+ Compare</button>
    </div>

    {/* Product Info */}
    <div className="space-y-3  pt-6 border-t text-lg text-[#9F9F9F]">
      <p>SKU : {product.sku}</p>
      <p>Category : {product.category}</p>
      <p>Tags : {product.tags?.join(", ")}</p>
    </div>

    {/* Social Share */}
    <div className="flex items-center gap-4 pt-4">
      <span className="text-[#9F9F9F]">Share:</span>
      <div className="flex gap-2">
        <Facebook
          size={20}
          className="text-white bg-[#000] p-2 w-8 h-8 text-[16px] rounded-full"
        />
        <Linkedin
          size={20}
          className="text-white bg-[#000] p-2 w-8 h-8 text-[16px] rounded-full"
        />
        <Twitter
          size={20}
          className="text-white bg-[#000] p-2 w-8 h-8 text-[16px] rounded-full"
        />
      </div>
    </div>
  </div>
</div>;
