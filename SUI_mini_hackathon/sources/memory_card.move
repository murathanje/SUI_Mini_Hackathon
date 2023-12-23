module memoris::memory_card {
    use std::string::{Self, String};
    use sui::object::{Self,UID};

    struct MemoryCard has key, store {
        id: UID,
        title: String,
        memory: String,
        from: address,
        to: address,
    }

    struct Admin has key {
        id: UID,
    }

    use sui::tx_context::{Self, TxContext};
    use sui::transfer;

    fun init(ctx: &mut TxContext){
        transfer::transfer(Admin {id: object::new(ctx)}, tx_context::sender(ctx));
    }

    public entry fun create_memory_card(_:&Admin,title: vector<u8>, memory:vector<u8>,to:address, ctx: &mut TxContext) {        
        let memory_card = MemoryCard {
            id: object::new(ctx),
            title: string::utf8(title),
            memory: string::utf8(memory),
            from: tx_context::sender(ctx),
            to
        };
        transfer::transfer(memory_card,to);
    }

    #[test_only]
    public fun init_for_testing(ctx: &mut TxContext){
        init(ctx);
    }
}
