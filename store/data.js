import axios from "axios";

export const state = () => ({
    characterArr: []
});

export const mutations = {
    setCharacter: (state, characterArr) => {
        state.characterAr = characterArr
    }
};

export const actions = {
    async getApiCharacter({commit, state}) {
        return await axios.get("https://class-clan-base-default-rtdb.firebaseio.com/character.json")
        .then(res => {
            const arr = [];
            for(const key in res.data) {
                state.characterArr.push({...res.data[key], id: key})
            }
            commit("setCharacter", arr)
        })
    }
};

export const getters = {
    CharacterArr: state => state.characterAr
};