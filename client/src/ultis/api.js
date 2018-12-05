import axios from 'axios';

export default {
    getAllToys:function(){
        return axios.get('/api/toy')
    },
    getAllBabies:function(){
        return axios.get('/api/baby')
    },
    findBabyByName:function(name){
        return axios.get('/api/baby/'+name)
    },
    addNewBaby:function(newBaby){
        return axios.post('/api/baby/',newBaby)
    },
    getAllToysByBaby:function(id){
        return axios.get('/api/baby/'+id+'/toy')
    },
    deleteBabyById:function(id){
        return axios.delete('/api/baby/'+id)
    },
    giveToy2Baby:function(query){
        return axios.put('/api/baby/sendtoy',query)
    }
}