function MyForm () {
    return (
        <form className="flex flex-col border-2 border-amber-300 w-[500px] px-5 py-10 mx-auto">
            <input type="text" className="border-black border-2 px-4 py-2 w-[300px] mb-2" placeholder="Введите текст"/>
            <button className="w-[100px] bg-blue-500 text-white py-2 px-2">Отправить</button>
        </form>
    );
}

export default MyForm;
