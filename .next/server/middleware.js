// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[826],{

/***/ 6195:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_esm_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2929);

        

        (0,next_dist_esm_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__/* .enhanceGlobals */ .g)()

        var mod = __webpack_require__(3545)
        var handler = mod.middleware || mod.default;

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(opts) {
          return (0,next_dist_esm_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__/* .adapter */ .V)({
              ...opts,
              page: "/middleware",
              handler,
          })
        }
    

/***/ }),

/***/ 3545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ middleware)
});

// EXTERNAL MODULE: ./node_modules/@upstash/ratelimit/dist/index.js
var dist = __webpack_require__(2998);
;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/error.js
/**
 * Result of a bad request to upstash
 */ class UpstashError extends Error {
    constructor(message){
        super(message);
        this.name = "UpstashError";
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/util.js
function parseRecursive(obj) {
    const parsed = Array.isArray(obj) ? obj.map((o)=>{
        try {
            return parseRecursive(o);
        } catch  {
            return o;
        }
    }) : JSON.parse(obj);
    /**
     * Parsing very large numbers can result in MAX_SAFE_INTEGER
     * overflow. In that case we return the number as string instead.
     */ if (typeof parsed === "number" && parsed.toString() != obj) {
        return obj;
    }
    return parsed;
}
function parseResponse(result) {
    try {
        /**
         * Try to parse the response if possible
         */ return parseRecursive(result);
    } catch  {
        return result;
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/command.js


const defaultSerializer = (c)=>{
    switch(typeof c){
        case "string":
        case "number":
        case "boolean":
            return c;
        default:
            return JSON.stringify(c);
    }
};
/**
 * Command offers default (de)serialization and the exec method to all commands.
 *
 * TData represents what the user will enter or receive,
 * TResult is the raw data returned from upstash, which may need to be transformed or parsed.
 */ class Command {
    /**
     * Create a new command instance.
     *
     * You can define a custom `deserialize` function. By default we try to deserialize as json.
     */ constructor(command, opts){
        Object.defineProperty(this, "command", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "serialize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deserialize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serialize = defaultSerializer;
        this.deserialize = typeof opts?.automaticDeserialization === "undefined" || opts.automaticDeserialization ? opts?.deserialize ?? parseResponse : (x)=>x;
        this.command = command.map((c)=>this.serialize(c));
    }
    /**
     * Execute the command using a client.
     */ async exec(client) {
        const { result , error  } = await client.request({
            body: this.command
        });
        if (error) {
            throw new UpstashError(error);
        }
        if (typeof result === "undefined") {
            throw new Error("Request did not return a result");
        }
        return this.deserialize(result);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/append.js

/**
 * @see https://redis.io/commands/append
 */ class AppendCommand extends Command {
    constructor(cmd, opts){
        super([
            "append",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/bitcount.js

/**
 * @see https://redis.io/commands/bitcount
 */ class BitCountCommand extends Command {
    constructor([key, start, end], opts){
        const command = [
            "bitcount",
            key
        ];
        if (typeof start === "number") {
            command.push(start);
        }
        if (typeof end === "number") {
            command.push(end);
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/bitop.js

/**
 * @see https://redis.io/commands/bitop
 */ class BitOpCommand extends Command {
    constructor(cmd, opts){
        super([
            "bitop",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/bitpos.js

/**
 * @see https://redis.io/commands/bitpos
 */ class BitPosCommand extends Command {
    constructor(cmd, opts){
        super([
            "bitpos",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/dbsize.js

/**
 * @see https://redis.io/commands/dbsize
 */ class DBSizeCommand extends Command {
    constructor(opts){
        super([
            "dbsize"
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/decr.js

/**
 * @see https://redis.io/commands/decr
 */ class DecrCommand extends Command {
    constructor(cmd, opts){
        super([
            "decr",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/decrby.js

/**
 * @see https://redis.io/commands/decrby
 */ class DecrByCommand extends Command {
    constructor(cmd, opts){
        super([
            "decrby",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/del.js

/**
 * @see https://redis.io/commands/del
 */ class DelCommand extends Command {
    constructor(cmd, opts){
        super([
            "del",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/echo.js

/**
 * @see https://redis.io/commands/echo
 */ class EchoCommand extends Command {
    constructor(cmd, opts){
        super([
            "echo",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/eval.js

/**
 * @see https://redis.io/commands/eval
 */ class EvalCommand extends Command {
    constructor([script, keys, args], opts){
        super([
            "eval",
            script,
            keys.length,
            ...keys,
            ...args ?? []
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/evalsha.js

/**
 * @see https://redis.io/commands/evalsha
 */ class EvalshaCommand extends Command {
    constructor([sha, keys, args], opts){
        super([
            "evalsha",
            sha,
            keys.length,
            ...keys,
            ...args ?? []
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/exists.js

/**
 * @see https://redis.io/commands/exists
 */ class ExistsCommand extends Command {
    constructor(cmd, opts){
        super([
            "exists",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/expire.js

/**
 * @see https://redis.io/commands/expire
 */ class ExpireCommand extends Command {
    constructor(cmd, opts){
        super([
            "expire",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/expireat.js

/**
 * @see https://redis.io/commands/expireat
 */ class ExpireAtCommand extends Command {
    constructor(cmd, opts){
        super([
            "expireat",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/flushall.js

/**
 * @see https://redis.io/commands/flushall
 */ class FlushAllCommand extends Command {
    constructor(args, opts){
        const command = [
            "flushall"
        ];
        if (args && args.length > 0 && args[0].async) {
            command.push("async");
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/flushdb.js

/**
 * @see https://redis.io/commands/flushdb
 */ class FlushDBCommand extends Command {
    constructor([opts], cmdOpts){
        const command = [
            "flushdb"
        ];
        if (opts?.async) {
            command.push("async");
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/get.js

/**
 * @see https://redis.io/commands/get
 */ class GetCommand extends Command {
    constructor(cmd, opts){
        super([
            "get",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/getbit.js

/**
 * @see https://redis.io/commands/getbit
 */ class GetBitCommand extends Command {
    constructor(cmd, opts){
        super([
            "getbit",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/getdel.js

/**
 * @see https://redis.io/commands/getdel
 */ class GetDelCommand extends Command {
    constructor(cmd, opts){
        super([
            "getdel",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/getrange.js

/**
 * @see https://redis.io/commands/getrange
 */ class GetRangeCommand extends Command {
    constructor(cmd, opts){
        super([
            "getrange",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/getset.js

/**
 * @see https://redis.io/commands/getset
 */ class GetSetCommand extends Command {
    constructor(cmd, opts){
        super([
            "getset",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hdel.js

/**
 * @see https://redis.io/commands/hdel
 */ class HDelCommand extends Command {
    constructor(cmd, opts){
        super([
            "hdel",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hexists.js

/**
 * @see https://redis.io/commands/hexists
 */ class HExistsCommand extends Command {
    constructor(cmd, opts){
        super([
            "hexists",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hget.js

/**
 * @see https://redis.io/commands/hget
 */ class HGetCommand extends Command {
    constructor(cmd, opts){
        super([
            "hget",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hgetall.js

function deserialize(result) {
    if (result.length === 0) {
        return null;
    }
    const obj = {};
    while(result.length >= 2){
        const key = result.shift();
        const value = result.shift();
        try {
            obj[key] = JSON.parse(value);
        } catch  {
            obj[key] = value;
        }
    }
    return obj;
}
/**
 * @see https://redis.io/commands/hgetall
 */ class HGetAllCommand extends Command {
    constructor(cmd, opts){
        super([
            "hgetall",
            ...cmd
        ], {
            deserialize: (result)=>deserialize(result),
            ...opts
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hincrby.js

/**
 * @see https://redis.io/commands/hincrby
 */ class HIncrByCommand extends Command {
    constructor(cmd, opts){
        super([
            "hincrby",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hincrbyfloat.js

/**
 * @see https://redis.io/commands/hincrbyfloat
 */ class HIncrByFloatCommand extends Command {
    constructor(cmd, opts){
        super([
            "hincrbyfloat",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hkeys.js

/**
 * @see https://redis.io/commands/hkeys
 */ class HKeysCommand extends Command {
    constructor([key], opts){
        super([
            "hkeys",
            key
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hlen.js

/**
 * @see https://redis.io/commands/hlen
 */ class HLenCommand extends Command {
    constructor(cmd, opts){
        super([
            "hlen",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hmget.js

function hmget_deserialize(fields, result) {
    if (result.length === 0 || result.every((field)=>field === null)) {
        return null;
    }
    const obj = {};
    for(let i = 0; i < fields.length; i++){
        try {
            obj[fields[i]] = JSON.parse(result[i]);
        } catch  {
            obj[fields[i]] = result[i];
        }
    }
    return obj;
}
/**
 * hmget returns an object of all requested fields from a hash
 * The field values are returned as an object like this:
 * ```ts
 * {[fieldName: string]: T | null}
 * ```
 *
 * In case the hash does not exist or all fields are empty `null` is returned
 *
 * @see https://redis.io/commands/hmget
 */ class HMGetCommand extends Command {
    constructor([key, ...fields], opts){
        super([
            "hmget",
            key,
            ...fields
        ], {
            deserialize: (result)=>hmget_deserialize(fields, result),
            ...opts
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hmset.js

/**
 * @see https://redis.io/commands/hmset
 */ class HMSetCommand extends Command {
    constructor([key, kv], opts){
        super([
            "hmset",
            key,
            ...Object.entries(kv).flatMap(([field, value])=>[
                    field,
                    value
                ])
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hrandfield.js

function hrandfield_deserialize(result) {
    if (result.length === 0) {
        return null;
    }
    const obj = {};
    while(result.length >= 2){
        const key = result.shift();
        const value = result.shift();
        try {
            obj[key] = JSON.parse(value);
        } catch  {
            obj[key] = value;
        }
    }
    return obj;
}
/**
 * @see https://redis.io/commands/hrandfield
 */ class HRandFieldCommand extends Command {
    constructor(cmd, opts){
        const command = [
            "hrandfield",
            cmd[0]
        ];
        if (typeof cmd[1] === "number") {
            command.push(cmd[1]);
        }
        if (cmd[2]) {
            command.push("WITHVALUES");
        }
        super(command, {
            // @ts-ignore TODO:
            deserialize: cmd[2] ? (result)=>hrandfield_deserialize(result) : opts?.deserialize,
            ...opts
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hscan.js

/**
 * @see https://redis.io/commands/hscan
 */ class HScanCommand extends Command {
    constructor([key, cursor, cmdOpts], opts){
        const command = [
            "hscan",
            key,
            cursor
        ];
        if (cmdOpts?.match) {
            command.push("match", cmdOpts.match);
        }
        if (typeof cmdOpts?.count === "number") {
            command.push("count", cmdOpts.count);
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hset.js

/**
 * @see https://redis.io/commands/hset
 */ class HSetCommand extends Command {
    constructor([key, kv], opts){
        super([
            "hset",
            key,
            ...Object.entries(kv).flatMap(([field, value])=>[
                    field,
                    value
                ])
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hsetnx.js

/**
 * @see https://redis.io/commands/hsetnx
 */ class HSetNXCommand extends Command {
    constructor(cmd, opts){
        super([
            "hsetnx",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hstrlen.js

/**
 * @see https://redis.io/commands/hstrlen
 */ class HStrLenCommand extends Command {
    constructor(cmd, opts){
        super([
            "hstrlen",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/hvals.js

/**
 * @see https://redis.io/commands/hvals
 */ class HValsCommand extends Command {
    constructor(cmd, opts){
        super([
            "hvals",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/incr.js

/**
 * @see https://redis.io/commands/incr
 */ class IncrCommand extends Command {
    constructor(cmd, opts){
        super([
            "incr",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/incrby.js

/**
 * @see https://redis.io/commands/incrby
 */ class IncrByCommand extends Command {
    constructor(cmd, opts){
        super([
            "incrby",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/incrbyfloat.js

/**
 * @see https://redis.io/commands/incrbyfloat
 */ class IncrByFloatCommand extends Command {
    constructor(cmd, opts){
        super([
            "incrbyfloat",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_arrappend.js

/**
 * @see https://redis.io/commands/json.arrappend
 */ class JsonArrAppendCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRAPPEND",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_arrindex.js

/**
 * @see https://redis.io/commands/json.arrindex
 */ class JsonArrIndexCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRINDEX",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_arrinsert.js

/**
 * @see https://redis.io/commands/json.arrinsert
 */ class JsonArrInsertCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRINSERT",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_arrlen.js

/**
 * @see https://redis.io/commands/json.arrlen
 */ class JsonArrLenCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRLEN",
            cmd[0],
            cmd[1] ?? "$"
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_arrpop.js

/**
 * @see https://redis.io/commands/json.arrpop
 */ class JsonArrPopCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.ARRPOP",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_arrtrim.js

/**
 * @see https://redis.io/commands/json.arrtrim
 */ class JsonArrTrimCommand extends Command {
    constructor(cmd, opts){
        const path = cmd[1] ?? "$";
        const start = cmd[2] ?? 0;
        const stop = cmd[3] ?? 0;
        super([
            "JSON.ARRTRIM",
            cmd[0],
            path,
            start,
            stop
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_clear.js

/**
 * @see https://redis.io/commands/json.clear
 */ class JsonClearCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.CLEAR",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_del.js

/**
 * @see https://redis.io/commands/json.del
 */ class JsonDelCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.DEL",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_forget.js

/**
 * @see https://redis.io/commands/json.forget
 */ class JsonForgetCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.FORGET",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_get.js

/**
 * @see https://redis.io/commands/json.get
 */ class JsonGetCommand extends Command {
    constructor(cmd, opts){
        const command = [
            "JSON.GET"
        ];
        if (typeof cmd[1] === "string") {
            // @ts-ignore - we know this is a string
            command.push(...cmd);
        } else {
            command.push(cmd[0]);
            if (cmd[1]) {
                if (cmd[1].indent) {
                    command.push("INDENT", cmd[1].indent);
                }
                if (cmd[1].newline) {
                    command.push("NEWLINE", cmd[1].newline);
                }
                if (cmd[1].space) {
                    command.push("SPACE", cmd[1].space);
                }
            }
            // @ts-ignore - we know this is a string
            command.push(...cmd.slice(2));
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_mget.js

/**
 * @see https://redis.io/commands/json.mget
 */ class JsonMGetCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.MGET",
            ...cmd[0],
            cmd[1]
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_numincrby.js

/**
 * @see https://redis.io/commands/json.numincrby
 */ class JsonNumIncrByCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.NUMINCRBY",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_nummultby.js

/**
 * @see https://redis.io/commands/json.nummultby
 */ class JsonNumMultByCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.NUMMULTBY",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_objkeys.js

/**
 * @see https://redis.io/commands/json.objkeys
 */ class JsonObjKeysCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.OBJKEYS",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_objlen.js

/**
 * @see https://redis.io/commands/json.objlen
 */ class JsonObjLenCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.OBJLEN",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_resp.js

/**
 * @see https://redis.io/commands/json.resp
 */ class JsonRespCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.RESP",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_set.js

/**
 * @see https://redis.io/commands/json.set
 */ class JsonSetCommand extends Command {
    constructor(cmd, opts){
        const command = [
            "JSON.SET",
            cmd[0],
            cmd[1],
            cmd[2]
        ];
        if (cmd[3]) {
            if (cmd[3].nx) {
                command.push("NX");
            } else if (cmd[3].xx) {
                command.push("XX");
            }
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_strappend.js

/**
 * @see https://redis.io/commands/json.strappend
 */ class JsonStrAppendCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.STRAPPEND",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_strlen.js

/**
 * @see https://redis.io/commands/json.strlen
 */ class JsonStrLenCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.STRLEN",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_toggle.js

/**
 * @see https://redis.io/commands/json.toggle
 */ class JsonToggleCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.TOGGLE",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/json_type.js

/**
 * @see https://redis.io/commands/json.type
 */ class JsonTypeCommand extends Command {
    constructor(cmd, opts){
        super([
            "JSON.TYPE",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/keys.js

/**
 * @see https://redis.io/commands/keys
 */ class KeysCommand extends Command {
    constructor(cmd, opts){
        super([
            "keys",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lindex.js

class LIndexCommand extends Command {
    constructor(cmd, opts){
        super([
            "lindex",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/linsert.js

class LInsertCommand extends Command {
    constructor(cmd, opts){
        super([
            "linsert",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/llen.js

/**
 * @see https://redis.io/commands/llen
 */ class LLenCommand extends Command {
    constructor(cmd, opts){
        super([
            "llen",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lmove.js

/**
 * @see https://redis.io/commands/lmove
 */ class LMoveCommand extends Command {
    constructor(cmd, opts){
        super([
            "lmove",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lpop.js

/**
 * @see https://redis.io/commands/lpop
 */ class LPopCommand extends Command {
    constructor(cmd, opts){
        super([
            "lpop",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lpos.js

/**
 * @see https://redis.io/commands/lpos
 */ class LPosCommand extends Command {
    constructor(cmd, opts){
        const args = [
            "lpos",
            cmd[0],
            cmd[1]
        ];
        if (typeof cmd[2]?.rank === "number") {
            args.push("rank", cmd[2].rank);
        }
        if (typeof cmd[2]?.count === "number") {
            args.push("count", cmd[2].count);
        }
        if (typeof cmd[2]?.maxLen === "number") {
            args.push("maxLen", cmd[2].maxLen);
        }
        super(args, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lpush.js

/**
 * @see https://redis.io/commands/lpush
 */ class LPushCommand extends Command {
    constructor(cmd, opts){
        super([
            "lpush",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lpushx.js

/**
 * @see https://redis.io/commands/lpushx
 */ class LPushXCommand extends Command {
    constructor(cmd, opts){
        super([
            "lpushx",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lrange.js

class LRangeCommand extends Command {
    constructor(cmd, opts){
        super([
            "lrange",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lrem.js

class LRemCommand extends Command {
    constructor(cmd, opts){
        super([
            "lrem",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/lset.js

class LSetCommand extends Command {
    constructor(cmd, opts){
        super([
            "lset",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/ltrim.js

class LTrimCommand extends Command {
    constructor(cmd, opts){
        super([
            "ltrim",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/mget.js

/**
 * @see https://redis.io/commands/mget
 */ class MGetCommand extends Command {
    constructor(cmd, opts){
        super([
            "mget",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/mset.js

/**
 * @see https://redis.io/commands/mset
 */ class MSetCommand extends Command {
    constructor([kv], opts){
        super([
            "mset",
            ...Object.entries(kv).flatMap(([key, value])=>[
                    key,
                    value
                ])
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/msetnx.js

/**
 * @see https://redis.io/commands/msetnx
 */ class MSetNXCommand extends Command {
    constructor([kv], opts){
        super([
            "msetnx",
            ...Object.entries(kv).flatMap((_)=>_)
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/persist.js

/**
 * @see https://redis.io/commands/persist
 */ class PersistCommand extends Command {
    constructor(cmd, opts){
        super([
            "persist",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/pexpire.js

/**
 * @see https://redis.io/commands/pexpire
 */ class PExpireCommand extends Command {
    constructor(cmd, opts){
        super([
            "pexpire",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/pexpireat.js

/**
 * @see https://redis.io/commands/pexpireat
 */ class PExpireAtCommand extends Command {
    constructor(cmd, opts){
        super([
            "pexpireat",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/ping.js

/**
 * @see https://redis.io/commands/ping
 */ class PingCommand extends Command {
    constructor(cmd, opts){
        const command = [
            "ping"
        ];
        if (typeof cmd !== "undefined" && typeof cmd[0] !== "undefined") {
            command.push(cmd[0]);
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/psetex.js

/**
 * @see https://redis.io/commands/psetex
 */ class PSetEXCommand extends Command {
    constructor(cmd, opts){
        super([
            "psetex",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/pttl.js

/**
 * @see https://redis.io/commands/pttl
 */ class PTtlCommand extends Command {
    constructor(cmd, opts){
        super([
            "pttl",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/publish.js

/**
 * @see https://redis.io/commands/publish
 */ class PublishCommand extends Command {
    constructor(cmd, opts){
        super([
            "publish",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/randomkey.js

/**
 * @see https://redis.io/commands/randomkey
 */ class RandomKeyCommand extends Command {
    constructor(opts){
        super([
            "randomkey"
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/rename.js

/**
 * @see https://redis.io/commands/rename
 */ class RenameCommand extends Command {
    constructor(cmd, opts){
        super([
            "rename",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/renamenx.js

/**
 * @see https://redis.io/commands/renamenx
 */ class RenameNXCommand extends Command {
    constructor(cmd, opts){
        super([
            "renamenx",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/rpop.js

/**
 * @see https://redis.io/commands/rpop
 */ class RPopCommand extends Command {
    constructor(cmd, opts){
        super([
            "rpop",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/rpush.js

/**
 * @see https://redis.io/commands/rpush
 */ class RPushCommand extends Command {
    constructor(cmd, opts){
        super([
            "rpush",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/rpushx.js

/**
 * @see https://redis.io/commands/rpushx
 */ class RPushXCommand extends Command {
    constructor(cmd, opts){
        super([
            "rpushx",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sadd.js

/**
 * @see https://redis.io/commands/sadd
 */ class SAddCommand extends Command {
    constructor(cmd, opts){
        super([
            "sadd",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/scan.js

/**
 * @see https://redis.io/commands/scan
 */ class ScanCommand extends Command {
    constructor([cursor, opts], cmdOpts){
        const command = [
            "scan",
            cursor
        ];
        if (opts?.match) {
            command.push("match", opts.match);
        }
        if (typeof opts?.count === "number") {
            command.push("count", opts.count);
        }
        if (opts?.type && opts.type.length > 0) {
            command.push("type", opts.type);
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/scard.js

/**
 * @see https://redis.io/commands/scard
 */ class SCardCommand extends Command {
    constructor(cmd, opts){
        super([
            "scard",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/script_exists.js

/**
 * @see https://redis.io/commands/script-exists
 */ class ScriptExistsCommand extends Command {
    constructor(hashes, opts){
        super([
            "script",
            "exists",
            ...hashes
        ], {
            deserialize: (result)=>result,
            ...opts
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/script_flush.js

/**
 * @see https://redis.io/commands/script-flush
 */ class ScriptFlushCommand extends Command {
    constructor([opts], cmdOpts){
        const cmd = [
            "script",
            "flush"
        ];
        if (opts?.sync) {
            cmd.push("sync");
        } else if (opts?.async) {
            cmd.push("async");
        }
        super(cmd, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/script_load.js

/**
 * @see https://redis.io/commands/script-load
 */ class ScriptLoadCommand extends Command {
    constructor(args, opts){
        super([
            "script",
            "load",
            ...args
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sdiff.js

/**
 * @see https://redis.io/commands/sdiff
 */ class SDiffCommand extends Command {
    constructor(cmd, opts){
        super([
            "sdiff",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sdiffstore.js

/**
 * @see https://redis.io/commands/sdiffstore
 */ class SDiffStoreCommand extends Command {
    constructor(cmd, opts){
        super([
            "sdiffstore",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/set.js

/**
 * @see https://redis.io/commands/set
 */ class SetCommand extends Command {
    constructor([key, value, opts], cmdOpts){
        const command = [
            "set",
            key,
            value
        ];
        if (opts) {
            if ("nx" in opts && opts.nx) {
                command.push("nx");
            } else if ("xx" in opts && opts.xx) {
                command.push("xx");
            }
            if ("get" in opts && opts.get) {
                command.push("get");
            }
            if ("ex" in opts && typeof opts.ex === "number") {
                command.push("ex", opts.ex);
            } else if ("px" in opts && typeof opts.px === "number") {
                command.push("px", opts.px);
            } else if ("exat" in opts && typeof opts.exat === "number") {
                command.push("exat", opts.exat);
            } else if ("pxat" in opts && typeof opts.pxat === "number") {
                command.push("pxat", opts.pxat);
            } else if ("keepTtl" in opts && opts.keepTtl) {
                command.push("keepTtl", opts.keepTtl);
            }
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/setbit.js

/**
 * @see https://redis.io/commands/setbit
 */ class SetBitCommand extends Command {
    constructor(cmd, opts){
        super([
            "setbit",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/setex.js

/**
 * @see https://redis.io/commands/setex
 */ class SetExCommand extends Command {
    constructor(cmd, opts){
        super([
            "setex",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/setnx.js

/**
 * @see https://redis.io/commands/setnx
 */ class SetNxCommand extends Command {
    constructor(cmd, opts){
        super([
            "setnx",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/setrange.js

/**
 * @see https://redis.io/commands/setrange
 */ class SetRangeCommand extends Command {
    constructor(cmd, opts){
        super([
            "setrange",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sinter.js

/**
 * @see https://redis.io/commands/sinter
 */ class SInterCommand extends Command {
    constructor(cmd, opts){
        super([
            "sinter",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sinterstore.js

/**
 * @see https://redis.io/commands/sinterstore
 */ class SInterStoreCommand extends Command {
    constructor(cmd, opts){
        super([
            "sinterstore",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sismember.js

/**
 * @see https://redis.io/commands/sismember
 */ class SIsMemberCommand extends Command {
    constructor(cmd, opts){
        super([
            "sismember",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/smembers.js

/**
 * @see https://redis.io/commands/smembers
 */ class SMembersCommand extends Command {
    constructor(cmd, opts){
        super([
            "smembers",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/smismember.js

/**
 * @see https://redis.io/commands/smismember
 */ class SMIsMemberCommand extends Command {
    constructor(cmd, opts){
        super([
            "smismember",
            cmd[0],
            ...cmd[1]
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/smove.js

/**
 * @see https://redis.io/commands/smove
 */ class SMoveCommand extends Command {
    constructor(cmd, opts){
        super([
            "smove",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/spop.js

/**
 * @see https://redis.io/commands/spop
 */ class SPopCommand extends Command {
    constructor([key, count], opts){
        const command = [
            "spop",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/srandmember.js

/**
 * @see https://redis.io/commands/srandmember
 */ class SRandMemberCommand extends Command {
    constructor([key, count], opts){
        const command = [
            "srandmember",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/srem.js

/**
 * @see https://redis.io/commands/srem
 */ class SRemCommand extends Command {
    constructor(cmd, opts){
        super([
            "srem",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sscan.js

/**
 * @see https://redis.io/commands/sscan
 */ class SScanCommand extends Command {
    constructor([key, cursor, opts], cmdOpts){
        const command = [
            "sscan",
            key,
            cursor
        ];
        if (opts?.match) {
            command.push("match", opts.match);
        }
        if (typeof opts?.count === "number") {
            command.push("count", opts.count);
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/strlen.js

/**
 * @see https://redis.io/commands/strlen
 */ class StrLenCommand extends Command {
    constructor(cmd, opts){
        super([
            "strlen",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sunion.js

/**
 * @see https://redis.io/commands/sunion
 */ class SUnionCommand extends Command {
    constructor(cmd, opts){
        super([
            "sunion",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/sunionstore.js

/**
 * @see https://redis.io/commands/sunionstore
 */ class SUnionStoreCommand extends Command {
    constructor(cmd, opts){
        super([
            "sunionstore",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/time.js

/**
 * @see https://redis.io/commands/time
 */ class TimeCommand extends Command {
    constructor(opts){
        super([
            "time"
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/touch.js

/**
 * @see https://redis.io/commands/touch
 */ class TouchCommand extends Command {
    constructor(cmd, opts){
        super([
            "touch",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/ttl.js

/**
 * @see https://redis.io/commands/ttl
 */ class TtlCommand extends Command {
    constructor(cmd, opts){
        super([
            "ttl",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/type.js

/**
 * @see https://redis.io/commands/type
 */ class TypeCommand extends Command {
    constructor(cmd, opts){
        super([
            "type",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/unlink.js

/**
 * @see https://redis.io/commands/unlink
 */ class UnlinkCommand extends Command {
    constructor(cmd, opts){
        super([
            "unlink",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zadd.js

/**
 * @see https://redis.io/commands/zadd
 */ class ZAddCommand extends Command {
    constructor([key, arg1, ...arg2], opts){
        const command = [
            "zadd",
            key
        ];
        if ("nx" in arg1 && arg1.nx) {
            command.push("nx");
        } else if ("xx" in arg1 && arg1.xx) {
            command.push("xx");
        }
        if ("ch" in arg1 && arg1.ch) {
            command.push("ch");
        }
        if ("incr" in arg1 && arg1.incr) {
            command.push("incr");
        }
        if ("score" in arg1 && "member" in arg1) {
            command.push(arg1.score, arg1.member);
        }
        command.push(...arg2.flatMap(({ score , member  })=>[
                score,
                member
            ]));
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zcard.js

/**
 * @see https://redis.io/commands/zcard
 */ class ZCardCommand extends Command {
    constructor(cmd, opts){
        super([
            "zcard",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zcount.js

/**
 * @see https://redis.io/commands/zcount
 */ class ZCountCommand extends Command {
    constructor(cmd, opts){
        super([
            "zcount",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zincrby.js

/**
 * @see https://redis.io/commands/zincrby
 */ class ZIncrByCommand extends Command {
    constructor(cmd, opts){
        super([
            "zincrby",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zinterstore.js

/**
 * @see https://redis.io/commands/zInterstore
 */ class ZInterStoreCommand extends Command {
    constructor([destination, numKeys, keyOrKeys, opts], cmdOpts){
        const command = [
            "zinterstore",
            destination,
            numKeys
        ];
        if (Array.isArray(keyOrKeys)) {
            command.push(...keyOrKeys);
        } else {
            command.push(keyOrKeys);
        }
        if (opts) {
            if ("weights" in opts && opts.weights) {
                command.push("weights", ...opts.weights);
            } else if ("weight" in opts && typeof opts.weight === "number") {
                command.push("weights", opts.weight);
            }
            if ("aggregate" in opts) {
                command.push("aggregate", opts.aggregate);
            }
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zlexcount.js

/**
 * @see https://redis.io/commands/zlexcount
 */ class ZLexCountCommand extends Command {
    constructor(cmd, opts){
        super([
            "zlexcount",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zpopmax.js

/**
 * @see https://redis.io/commands/zpopmax
 */ class ZPopMaxCommand extends Command {
    constructor([key, count], opts){
        const command = [
            "zpopmax",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zpopmin.js

/**
 * @see https://redis.io/commands/zpopmin
 */ class ZPopMinCommand extends Command {
    constructor([key, count], opts){
        const command = [
            "zpopmin",
            key
        ];
        if (typeof count === "number") {
            command.push(count);
        }
        super(command, opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zrange.js

/**
 * @see https://redis.io/commands/zrange
 */ class ZRangeCommand extends Command {
    constructor([key, min, max, opts], cmdOpts){
        const command = [
            "zrange",
            key,
            min,
            max
        ];
        // Either byScore or byLex is allowed
        if (opts?.byScore) {
            command.push("byscore");
        }
        if (opts?.byLex) {
            command.push("bylex");
        }
        if (opts?.rev) {
            command.push("rev");
        }
        if (typeof opts?.count !== "undefined" && typeof opts?.offset !== "undefined") {
            command.push("limit", opts.offset, opts.count);
        }
        if (opts?.withScores) {
            command.push("withscores");
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zrank.js

/**
 *  @see https://redis.io/commands/zrank
 */ class ZRankCommand extends Command {
    constructor(cmd, opts){
        super([
            "zrank",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zrem.js

/**
 * @see https://redis.io/commands/zrem
 */ class ZRemCommand extends Command {
    constructor(cmd, opts){
        super([
            "zrem",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zremrangebylex.js

/**
 * @see https://redis.io/commands/zremrangebylex
 */ class ZRemRangeByLexCommand extends Command {
    constructor(cmd, opts){
        super([
            "zremrangebylex",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zremrangebyrank.js

/**
 * @see https://redis.io/commands/zremrangebyrank
 */ class ZRemRangeByRankCommand extends Command {
    constructor(cmd, opts){
        super([
            "zremrangebyrank",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zremrangebyscore.js

/**
 * @see https://redis.io/commands/zremrangebyscore
 */ class ZRemRangeByScoreCommand extends Command {
    constructor(cmd, opts){
        super([
            "zremrangebyscore",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zrevrank.js

/**
 *  @see https://redis.io/commands/zrevrank
 */ class ZRevRankCommand extends Command {
    constructor(cmd, opts){
        super([
            "zrevrank",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zscan.js

/**
 * @see https://redis.io/commands/zscan
 */ class ZScanCommand extends Command {
    constructor([key, cursor, opts], cmdOpts){
        const command = [
            "zscan",
            key,
            cursor
        ];
        if (opts?.match) {
            command.push("match", opts.match);
        }
        if (typeof opts?.count === "number") {
            command.push("count", opts.count);
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zscore.js

/**
 * @see https://redis.io/commands/zscore
 */ class ZScoreCommand extends Command {
    constructor(cmd, opts){
        super([
            "zscore",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zunionstore.js

/**
 * @see https://redis.io/commands/zunionstore
 */ class ZUnionStoreCommand extends Command {
    constructor([destination, numKeys, keyOrKeys, opts], cmdOpts){
        const command = [
            "zunionstore",
            destination,
            numKeys
        ];
        if (Array.isArray(keyOrKeys)) {
            command.push(...keyOrKeys);
        } else {
            command.push(keyOrKeys);
        }
        if (opts) {
            if ("weights" in opts && opts.weights) {
                command.push("weights", ...opts.weights);
            } else if ("weight" in opts && typeof opts.weight === "number") {
                command.push("weights", opts.weight);
            }
            if ("aggregate" in opts) {
                command.push("aggregate", opts.aggregate);
            }
        }
        super(command, cmdOpts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/mod.js













































































































































;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zmscore.js

/**
 * @see https://redis.io/commands/zmscore
 */ class ZMScoreCommand extends Command {
    constructor(cmd, opts){
        const [key, members] = cmd;
        super([
            "zmscore",
            key,
            ...members
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/commands/zdiffstore.js

/**
 * @see https://redis.io/commands/zdiffstore
 */ class ZDiffStoreCommand extends Command {
    constructor(cmd, opts){
        super([
            "zdiffstore",
            ...cmd
        ], opts);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/pipeline.js





/**
 * Upstash REST API supports command pipelining to send multiple commands in
 * batch, instead of sending each command one by one and waiting for a response.
 * When using pipelines, several commands are sent using a single HTTP request,
 * and a single JSON array response is returned. Each item in the response array
 * corresponds to the command in the same order within the pipeline.
 *
 * **NOTE:**
 *
 * Execution of the pipeline is not atomic. Even though each command in
 * the pipeline will be executed in order, commands sent by other clients can
 * interleave with the pipeline.
 *
 * **Examples:**
 *
 * ```ts
 *  const p = redis.pipeline() // or redis.multi()
 * p.set("key","value")
 * p.get("key")
 * const res = await p.exec()
 * ```
 *
 * You can also chain commands together
 * ```ts
 * const p = redis.pipeline()
 * const res = await p.set("key","value").get("key").exec()
 * ```
 *
 * Return types are inferred if all commands are chained, but you can still
 * override the response type manually:
 * ```ts
 *  redis.pipeline()
 *   .set("key", { greeting: "hello"})
 *   .get("key")
 *   .exec<["OK", { greeting: string } ]>()
 *
 * ```
 */ class Pipeline {
    constructor(opts){
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "commands", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "commandOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "multiExec", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Send the pipeline request to upstash.
         *
         * Returns an array with the results of all pipelined commands.
         *
         * If all commands are statically chained from start to finish, types are inferred. You can still define a return type manually if necessary though:
         * ```ts
         * const p = redis.pipeline()
         * p.get("key")
         * const result = p.exec<[{ greeting: string }]>()
         * ```
         */ Object.defineProperty(this, "exec", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async ()=>{
                if (this.commands.length === 0) {
                    throw new Error("Pipeline is empty");
                }
                const path = this.multiExec ? [
                    "multi-exec"
                ] : [
                    "pipeline"
                ];
                const res = await this.client.request({
                    path,
                    body: Object.values(this.commands).map((c)=>c.command)
                });
                return res.map(({ error , result  }, i)=>{
                    if (error) {
                        throw new UpstashError(`Command ${i + 1} [ ${this.commands[i].command[0]} ] failed: ${error}`);
                    }
                    return this.commands[i].deserialize(result);
                });
            }
        });
        /**
         * @see https://redis.io/commands/append
         */ Object.defineProperty(this, "append", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new AppendCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/bitcount
         */ Object.defineProperty(this, "bitcount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new BitCountCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/bitop
         */ Object.defineProperty(this, "bitop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (op, destinationKey, sourceKey, ...sourceKeys)=>this.chain(new BitOpCommand([
                    op,
                    destinationKey,
                    sourceKey,
                    ...sourceKeys
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/bitpos
         */ Object.defineProperty(this, "bitpos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new BitPosCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zdiffstore
         */ Object.defineProperty(this, "zdiffstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZDiffStoreCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/dbsize
         */ Object.defineProperty(this, "dbsize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>this.chain(new DBSizeCommand(this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/decr
         */ Object.defineProperty(this, "decr", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new DecrCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/decrby
         */ Object.defineProperty(this, "decrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new DecrByCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/del
         */ Object.defineProperty(this, "del", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new DelCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/echo
         */ Object.defineProperty(this, "echo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new EchoCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/eval
         */ Object.defineProperty(this, "eval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new EvalCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/evalsha
         */ Object.defineProperty(this, "evalsha", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new EvalshaCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/exists
         */ Object.defineProperty(this, "exists", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ExistsCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/expire
         */ Object.defineProperty(this, "expire", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ExpireCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/expireat
         */ Object.defineProperty(this, "expireat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ExpireAtCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/flushall
         */ Object.defineProperty(this, "flushall", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (args)=>this.chain(new FlushAllCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/flushdb
         */ Object.defineProperty(this, "flushdb", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new FlushDBCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/get
         */ Object.defineProperty(this, "get", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new GetCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/getbit
         */ Object.defineProperty(this, "getbit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new GetBitCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/getdel
         */ Object.defineProperty(this, "getdel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new GetDelCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/getrange
         */ Object.defineProperty(this, "getrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new GetRangeCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/getset
         */ Object.defineProperty(this, "getset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, value)=>this.chain(new GetSetCommand([
                    key,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hdel
         */ Object.defineProperty(this, "hdel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HDelCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hexists
         */ Object.defineProperty(this, "hexists", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HExistsCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hget
         */ Object.defineProperty(this, "hget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HGetCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hgetall
         */ Object.defineProperty(this, "hgetall", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HGetAllCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hincrby
         */ Object.defineProperty(this, "hincrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HIncrByCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hincrbyfloat
         */ Object.defineProperty(this, "hincrbyfloat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HIncrByFloatCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hkeys
         */ Object.defineProperty(this, "hkeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HKeysCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hlen
         */ Object.defineProperty(this, "hlen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HLenCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hmget
         */ Object.defineProperty(this, "hmget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HMGetCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hmset
         */ Object.defineProperty(this, "hmset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, kv)=>this.chain(new HMSetCommand([
                    key,
                    kv
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hrandfield
         */ Object.defineProperty(this, "hrandfield", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, count, withValues)=>this.chain(new HRandFieldCommand([
                    key,
                    count,
                    withValues
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hscan
         */ Object.defineProperty(this, "hscan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HScanCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hset
         */ Object.defineProperty(this, "hset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, kv)=>this.chain(new HSetCommand([
                    key,
                    kv
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hsetnx
         */ Object.defineProperty(this, "hsetnx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, field, value)=>this.chain(new HSetNXCommand([
                    key,
                    field,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hstrlen
         */ Object.defineProperty(this, "hstrlen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HStrLenCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/hvals
         */ Object.defineProperty(this, "hvals", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new HValsCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/incr
         */ Object.defineProperty(this, "incr", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new IncrCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/incrby
         */ Object.defineProperty(this, "incrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new IncrByCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/incrbyfloat
         */ Object.defineProperty(this, "incrbyfloat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new IncrByFloatCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/keys
         */ Object.defineProperty(this, "keys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new KeysCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lindex
         */ Object.defineProperty(this, "lindex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new LIndexCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/linsert
         */ Object.defineProperty(this, "linsert", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, direction, pivot, value)=>this.chain(new LInsertCommand([
                    key,
                    direction,
                    pivot,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/llen
         */ Object.defineProperty(this, "llen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new LLenCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lmove
         */ Object.defineProperty(this, "lmove", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new LMoveCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lpop
         */ Object.defineProperty(this, "lpop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new LPopCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lpos
         */ Object.defineProperty(this, "lpos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new LPosCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lpush
         */ Object.defineProperty(this, "lpush", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>this.chain(new LPushCommand([
                    key,
                    ...elements
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lpushx
         */ Object.defineProperty(this, "lpushx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>this.chain(new LPushXCommand([
                    key,
                    ...elements
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lrange
         */ Object.defineProperty(this, "lrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new LRangeCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lrem
         */ Object.defineProperty(this, "lrem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, count, value)=>this.chain(new LRemCommand([
                    key,
                    count,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/lset
         */ Object.defineProperty(this, "lset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, index, value)=>this.chain(new LSetCommand([
                    key,
                    index,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/ltrim
         */ Object.defineProperty(this, "ltrim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new LTrimCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/mget
         */ Object.defineProperty(this, "mget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new MGetCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/mset
         */ Object.defineProperty(this, "mset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (kv)=>this.chain(new MSetCommand([
                    kv
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/msetnx
         */ Object.defineProperty(this, "msetnx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (kv)=>this.chain(new MSetNXCommand([
                    kv
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/persist
         */ Object.defineProperty(this, "persist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new PersistCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/pexpire
         */ Object.defineProperty(this, "pexpire", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new PExpireCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/pexpireat
         */ Object.defineProperty(this, "pexpireat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new PExpireAtCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/ping
         */ Object.defineProperty(this, "ping", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (args)=>this.chain(new PingCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/psetex
         */ Object.defineProperty(this, "psetex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ttl, value)=>this.chain(new PSetEXCommand([
                    key,
                    ttl,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/pttl
         */ Object.defineProperty(this, "pttl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new PTtlCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/publish
         */ Object.defineProperty(this, "publish", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new PublishCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/randomkey
         */ Object.defineProperty(this, "randomkey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>this.chain(new RandomKeyCommand(this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/rename
         */ Object.defineProperty(this, "rename", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new RenameCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/renamenx
         */ Object.defineProperty(this, "renamenx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new RenameNXCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/rpop
         */ Object.defineProperty(this, "rpop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new RPopCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/rpush
         */ Object.defineProperty(this, "rpush", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>this.chain(new RPushCommand([
                    key,
                    ...elements
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/rpushx
         */ Object.defineProperty(this, "rpushx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>this.chain(new RPushXCommand([
                    key,
                    ...elements
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sadd
         */ Object.defineProperty(this, "sadd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...members)=>this.chain(new SAddCommand([
                    key,
                    ...members
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/scan
         */ Object.defineProperty(this, "scan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ScanCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/scard
         */ Object.defineProperty(this, "scard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SCardCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/script-exists
         */ Object.defineProperty(this, "scriptExists", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ScriptExistsCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/script-flush
         */ Object.defineProperty(this, "scriptFlush", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ScriptFlushCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/script-load
         */ Object.defineProperty(this, "scriptLoad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ScriptLoadCommand(args, this.commandOptions))
        });
        /*)*
         * @see https://redis.io/commands/sdiff
         */ Object.defineProperty(this, "sdiff", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SDiffCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sdiffstore
         */ Object.defineProperty(this, "sdiffstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SDiffStoreCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/set
         */ Object.defineProperty(this, "set", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, value, opts)=>this.chain(new SetCommand([
                    key,
                    value,
                    opts
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/setbit
         */ Object.defineProperty(this, "setbit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SetBitCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/setex
         */ Object.defineProperty(this, "setex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ttl, value)=>this.chain(new SetExCommand([
                    key,
                    ttl,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/setnx
         */ Object.defineProperty(this, "setnx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, value)=>this.chain(new SetNxCommand([
                    key,
                    value
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/setrange
         */ Object.defineProperty(this, "setrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SetRangeCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sinter
         */ Object.defineProperty(this, "sinter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SInterCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sinterstore
         */ Object.defineProperty(this, "sinterstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SInterStoreCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sismember
         */ Object.defineProperty(this, "sismember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>this.chain(new SIsMemberCommand([
                    key,
                    member
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/smembers
         */ Object.defineProperty(this, "smembers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SMembersCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/smismember
         */ Object.defineProperty(this, "smismember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, members)=>this.chain(new SMIsMemberCommand([
                    key,
                    members
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/smove
         */ Object.defineProperty(this, "smove", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (source, destination, member)=>this.chain(new SMoveCommand([
                    source,
                    destination,
                    member
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/spop
         */ Object.defineProperty(this, "spop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SPopCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/srandmember
         */ Object.defineProperty(this, "srandmember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SRandMemberCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/srem
         */ Object.defineProperty(this, "srem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...members)=>this.chain(new SRemCommand([
                    key,
                    ...members
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sscan
         */ Object.defineProperty(this, "sscan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SScanCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/strlen
         */ Object.defineProperty(this, "strlen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new StrLenCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sunion
         */ Object.defineProperty(this, "sunion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SUnionCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/sunionstore
         */ Object.defineProperty(this, "sunionstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new SUnionStoreCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/time
         */ Object.defineProperty(this, "time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>this.chain(new TimeCommand(this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/touch
         */ Object.defineProperty(this, "touch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new TouchCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/ttl
         */ Object.defineProperty(this, "ttl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new TtlCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/type
         */ Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new TypeCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/unlink
         */ Object.defineProperty(this, "unlink", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new UnlinkCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zadd
         */ Object.defineProperty(this, "zadd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>{
                if ("score" in args[1]) {
                    return this.chain(new ZAddCommand([
                        args[0],
                        args[1],
                        ...args.slice(2)
                    ], this.commandOptions));
                }
                return this.chain(new ZAddCommand([
                    args[0],
                    args[1],
                    ...args.slice(2)
                ], this.commandOptions));
            }
        });
        /**
         * @see https://redis.io/commands/zcard
         */ Object.defineProperty(this, "zcard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZCardCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zcount
         */ Object.defineProperty(this, "zcount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZCountCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zincrby
         */ Object.defineProperty(this, "zincrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, increment, member)=>this.chain(new ZIncrByCommand([
                    key,
                    increment,
                    member
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zinterstore
         */ Object.defineProperty(this, "zinterstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZInterStoreCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zlexcount
         */ Object.defineProperty(this, "zlexcount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZLexCountCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zmscore
         */ Object.defineProperty(this, "zmscore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZMScoreCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zpopmax
         */ Object.defineProperty(this, "zpopmax", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZPopMaxCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zpopmin
         */ Object.defineProperty(this, "zpopmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZPopMinCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zrange
         */ Object.defineProperty(this, "zrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZRangeCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zrank
         */ Object.defineProperty(this, "zrank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>this.chain(new ZRankCommand([
                    key,
                    member
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zrem
         */ Object.defineProperty(this, "zrem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...members)=>this.chain(new ZRemCommand([
                    key,
                    ...members
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zremrangebylex
         */ Object.defineProperty(this, "zremrangebylex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZRemRangeByLexCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zremrangebyrank
         */ Object.defineProperty(this, "zremrangebyrank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZRemRangeByRankCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zremrangebyscore
         */ Object.defineProperty(this, "zremrangebyscore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZRemRangeByScoreCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zrevrank
         */ Object.defineProperty(this, "zrevrank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>this.chain(new ZRevRankCommand([
                    key,
                    member
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zscan
         */ Object.defineProperty(this, "zscan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZScanCommand(args, this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zscore
         */ Object.defineProperty(this, "zscore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>this.chain(new ZScoreCommand([
                    key,
                    member
                ], this.commandOptions))
        });
        /**
         * @see https://redis.io/commands/zunionstore
         */ Object.defineProperty(this, "zunionstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>this.chain(new ZUnionStoreCommand(args, this.commandOptions))
        });
        this.client = opts.client;
        this.commands = []; // the TCommands generic in the class definition is only used for carrying through chained command types and should never be explicitly set when instantiating the class
        this.commandOptions = opts.commandOptions;
        this.multiExec = opts.multiExec ?? false;
    }
    /**
     * Pushes a command into the pipeline and returns a chainable instance of the
     * pipeline
     */ chain(command) {
        this.commands.push(command);
        return this; // TS thinks we're returning Pipeline<[]> here, because we're not creating a new instance of the class, hence the cast
    }
    /**
     * @see https://redis.io/commands/?group=json
     */ get json() {
        return {
            /**
             * @see https://redis.io/commands/json.arrappend
             */ arrappend: (...args)=>this.chain(new JsonArrAppendCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.arrindex
             */ arrindex: (...args)=>this.chain(new JsonArrIndexCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.arrinsert
             */ arrinsert: (...args)=>this.chain(new JsonArrInsertCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.arrlen
             */ arrlen: (...args)=>this.chain(new JsonArrLenCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.arrpop
             */ arrpop: (...args)=>this.chain(new JsonArrPopCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.arrtrim
             */ arrtrim: (...args)=>this.chain(new JsonArrTrimCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.clear
             */ clear: (...args)=>this.chain(new JsonClearCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.del
             */ del: (...args)=>this.chain(new JsonDelCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.forget
             */ forget: (...args)=>this.chain(new JsonForgetCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.get
             */ get: (...args)=>this.chain(new JsonGetCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.mget
             */ mget: (...args)=>this.chain(new JsonMGetCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.numincrby
             */ numincrby: (...args)=>this.chain(new JsonNumIncrByCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.nummultby
             */ nummultby: (...args)=>this.chain(new JsonNumMultByCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.objkeys
             */ objkeys: (...args)=>this.chain(new JsonObjKeysCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.objlen
             */ objlen: (...args)=>this.chain(new JsonObjLenCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.resp
             */ resp: (...args)=>this.chain(new JsonRespCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.set
             */ set: (...args)=>this.chain(new JsonSetCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.strappend
             */ strappend: (...args)=>this.chain(new JsonStrAppendCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.strlen
             */ strlen: (...args)=>this.chain(new JsonStrLenCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.toggle
             */ toggle: (...args)=>this.chain(new JsonToggleCommand(args, this.commandOptions)),
            /**
             * @see https://redis.io/commands/json.type
             */ type: (...args)=>this.chain(new JsonTypeCommand(args, this.commandOptions))
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/deps/deno.land/x/base64@v0.2.1/base.js
function getLengths(b64) {
    const len = b64.length;
    // if (len % 4 > 0) {
    //   throw new TypeError("Invalid string. Length must be a multiple of 4");
    // }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    let validLen = b64.indexOf("=");
    if (validLen === -1) {
        validLen = len;
    }
    const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
function init(lookup, revLookup, urlsafe = false) {
    function _byteLength(validLen, placeHoldersLen) {
        return Math.floor((validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen);
    }
    function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3f] + lookup[num >> 12 & 0x3f] + lookup[num >> 6 & 0x3f] + lookup[num & 0x3f];
    }
    function encodeChunk(buf, start, end) {
        const out = new Array((end - start) / 3);
        for(let i = start, curTriplet = 0; i < end; i += 3){
            out[curTriplet++] = tripletToBase64((buf[i] << 16) + (buf[i + 1] << 8) + buf[i + 2]);
        }
        return out.join("");
    }
    return {
        // base64 is 4/3 + up to two characters of the original data
        byteLength (b64) {
            return _byteLength.apply(null, getLengths(b64));
        },
        toUint8Array (b64) {
            const [validLen, placeHoldersLen] = getLengths(b64);
            const buf = new Uint8Array(_byteLength(validLen, placeHoldersLen));
            // If there are placeholders, only get up to the last complete 4 chars
            const len = placeHoldersLen ? validLen - 4 : validLen;
            let tmp;
            let curByte = 0;
            let i;
            for(i = 0; i < len; i += 4){
                tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                buf[curByte++] = tmp >> 16 & 0xff;
                buf[curByte++] = tmp >> 8 & 0xff;
                buf[curByte++] = tmp & 0xff;
            }
            if (placeHoldersLen === 2) {
                tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                buf[curByte++] = tmp & 0xff;
            } else if (placeHoldersLen === 1) {
                tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                buf[curByte++] = tmp >> 8 & 0xff;
                buf[curByte++] = tmp & 0xff;
            }
            return buf;
        },
        fromUint8Array (buf) {
            const maxChunkLength = 16383; // Must be multiple of 3
            const len = buf.length;
            const extraBytes = len % 3; // If we have 1 byte left, pad 2 bytes
            const len2 = len - extraBytes;
            const parts = new Array(Math.ceil(len2 / maxChunkLength) + (extraBytes ? 1 : 0));
            let curChunk = 0;
            let chunkEnd;
            // Go through the array every three bytes, we'll deal with trailing stuff later
            for(let i = 0; i < len2; i += maxChunkLength){
                chunkEnd = i + maxChunkLength;
                parts[curChunk++] = encodeChunk(buf, i, chunkEnd > len2 ? len2 : chunkEnd);
            }
            let tmp;
            // Pad the end with zeros, but make sure to not forget the extra bytes
            if (extraBytes === 1) {
                tmp = buf[len2];
                parts[curChunk] = lookup[tmp >> 2] + lookup[tmp << 4 & 0x3f];
                if (!urlsafe) parts[curChunk] += "==";
            } else if (extraBytes === 2) {
                tmp = buf[len2] << 8 | buf[len2 + 1] & 0xff;
                parts[curChunk] = lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3f] + lookup[tmp << 2 & 0x3f];
                if (!urlsafe) parts[curChunk] += "=";
            }
            return parts.join("");
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/deps/deno.land/x/base64@v0.2.1/base64url.js

const lookup = [];
const revLookup = [];
const code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
for(let i = 0, l = code.length; i < l; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
const { byteLength , toUint8Array , fromUint8Array  } = init(lookup, revLookup, true);

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/deps/denopkg.com/chiefbiiko/std-encoding@v1.0.0/mod.js

const decoder = new TextDecoder();
const encoder = new TextEncoder();
/** Serializes a Uint8Array to a hexadecimal string. */ function toHexString(buf) {
    return buf.reduce((hex, byte)=>`${hex}${byte < 16 ? "0" : ""}${byte.toString(16)}`, "");
}
/** Deserializes a Uint8Array from a hexadecimal string. */ function fromHexString(hex) {
    const len = hex.length;
    if (len % 2 || !/^[0-9a-fA-F]+$/.test(hex)) {
        throw new TypeError("Invalid hex string.");
    }
    hex = hex.toLowerCase();
    const buf = new Uint8Array(Math.floor(len / 2));
    const end = len / 2;
    for(let i = 0; i < end; ++i){
        buf[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return buf;
}
/** Decodes a Uint8Array to utf8-, base64-, or hex-encoded string. */ function decode(buf, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return decoder.decode(buf);
    } else if (/^base64$/i.test(encoding)) {
        return fromUint8Array(buf);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return toHexString(buf);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}
function encode(str, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return encoder.encode(str);
    } else if (/^base64$/i.test(encoding)) {
        return toUint8Array(str);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return fromHexString(str);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/deps/deno.land/x/sha1@v1.0.3/deps.js


;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/deps/deno.land/x/sha1@v1.0.3/mod.js

function rotl(x, n) {
    return x << n | x >>> 32 - n;
}
/** Byte length of a SHA1 digest. */ const BYTES = 20;
/**  A class representation of the SHA1 algorithm. */ class SHA1 {
    /** Creates a SHA1 instance. */ constructor(){
        Object.defineProperty(this, "hashSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: BYTES
        });
        Object.defineProperty(this, "_buf", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Uint8Array(64)
        });
        Object.defineProperty(this, "_bufIdx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_count", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_K", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Uint32Array([
                0x5a827999,
                0x6ed9eba1,
                0x8f1bbcdc,
                0xca62c1d6
            ])
        });
        Object.defineProperty(this, "_H", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_finalized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.init();
    }
    /** Reduces the four input numbers to a single one. */ static F(t, b, c, d) {
        if (t <= 19) {
            return b & c | ~b & d;
        } else if (t <= 39) {
            return b ^ c ^ d;
        } else if (t <= 59) {
            return b & c | b & d | c & d;
        } else {
            return b ^ c ^ d;
        }
    }
    /** Initializes a hash instance. */ init() {
        // prettier-ignore
        this._H = new Uint32Array([
            0x67452301,
            0xEFCDAB89,
            0x98BADCFE,
            0x10325476,
            0xC3D2E1F0
        ]);
        this._bufIdx = 0;
        this._count = new Uint32Array(2);
        this._buf.fill(0);
        this._finalized = false;
        return this;
    }
    /** Updates a hash with additional message data. */ update(msg, inputEncoding) {
        if (msg === null) {
            throw new TypeError("msg must be a string or Uint8Array.");
        } else if (typeof msg === "string") {
            msg = encode(msg, inputEncoding);
        }
        // process the msg as many times as possible, the rest is stored in the buffer
        // message is processed in 512 bit (64 byte chunks)
        for(let i = 0; i < msg.length; i++){
            this._buf[this._bufIdx++] = msg[i];
            if (this._bufIdx === 64) {
                this.transform();
                this._bufIdx = 0;
            }
        }
        // counter update (number of message bits)
        const c = this._count;
        if ((c[0] += msg.length << 3) < msg.length << 3) {
            c[1]++;
        }
        c[1] += msg.length >>> 29;
        return this;
    }
    /** Finalizes a hash with additional message data. */ digest(outputEncoding) {
        if (this._finalized) {
            throw new Error("digest has already been called.");
        }
        this._finalized = true;
        // append '1'
        const b = this._buf;
        let idx = this._bufIdx;
        b[idx++] = 0x80;
        // zeropad up to byte pos 56
        while(idx !== 56){
            if (idx === 64) {
                this.transform();
                idx = 0;
            }
            b[idx++] = 0;
        }
        // append length in bits
        const c = this._count;
        b[56] = c[1] >>> 24 & 0xff;
        b[57] = c[1] >>> 16 & 0xff;
        b[58] = c[1] >>> 8 & 0xff;
        b[59] = c[1] >>> 0 & 0xff;
        b[60] = c[0] >>> 24 & 0xff;
        b[61] = c[0] >>> 16 & 0xff;
        b[62] = c[0] >>> 8 & 0xff;
        b[63] = c[0] >>> 0 & 0xff;
        this.transform();
        // return the hash as byte array (20 bytes)
        const hash = new Uint8Array(BYTES);
        for(let i = 0; i < 5; i++){
            hash[(i << 2) + 0] = this._H[i] >>> 24 & 0xff;
            hash[(i << 2) + 1] = this._H[i] >>> 16 & 0xff;
            hash[(i << 2) + 2] = this._H[i] >>> 8 & 0xff;
            hash[(i << 2) + 3] = this._H[i] >>> 0 & 0xff;
        }
        // clear internal states and prepare for new hash
        this.init();
        return outputEncoding ? decode(hash, outputEncoding) : hash;
    }
    /** Performs one transformation cycle. */ transform() {
        const h = this._H;
        let a = h[0];
        let b = h[1];
        let c = h[2];
        let d = h[3];
        let e = h[4];
        // convert byte buffer to words
        const w = new Uint32Array(80);
        for(let i = 0; i < 16; i++){
            w[i] = this._buf[(i << 2) + 3] | this._buf[(i << 2) + 2] << 8 | this._buf[(i << 2) + 1] << 16 | this._buf[i << 2] << 24;
        }
        for(let t = 0; t < 80; t++){
            if (t >= 16) {
                w[t] = rotl(w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16], 1);
            }
            const tmp = rotl(a, 5) + SHA1.F(t, b, c, d) + e + w[t] + this._K[Math.floor(t / 20)] | 0;
            e = d;
            d = c;
            c = rotl(b, 30);
            b = a;
            a = tmp;
        }
        h[0] = h[0] + a | 0;
        h[1] = h[1] + b | 0;
        h[2] = h[2] + c | 0;
        h[3] = h[3] + d | 0;
        h[4] = h[4] + e | 0;
    }
}
/** Generates a SHA1 hash of the input data. */ function sha1(msg, inputEncoding, outputEncoding) {
    return new SHA1().update(msg, inputEncoding).digest(outputEncoding);
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/script.js

/**
 * Creates a new script.
 *
 * Scripts offer the ability to optimistically try to execute a script without having to send the
 * entire script to the server. If the script is loaded on the server, it tries again by sending
 * the entire script. Afterwards, the script is cached on the server.
 *
 * @example
 * ```ts
 * const redis = new Redis({...})
 *
 * const script = redis.createScript<string>("return ARGV[1];")
 * const arg1 = await script.eval([], ["Hello World"])
 * assertEquals(arg1, "Hello World")
 * ```
 */ class Script {
    constructor(redis, script){
        Object.defineProperty(this, "script", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sha1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "redis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.redis = redis;
        this.sha1 = this.digest(script);
        this.script = script;
    }
    /**
     * Send an `EVAL` command to redis.
     */ async eval(keys, args) {
        return await this.redis.eval(this.script, keys, args);
    }
    /**
     * Calculates the sha1 hash of the script and then calls `EVALSHA`.
     */ async evalsha(keys, args) {
        return await this.redis.evalsha(this.sha1, keys, args);
    }
    /**
     * Optimistically try to run `EVALSHA` first.
     * If the script is not loaded in redis, it will fall back and try again with `EVAL`.
     *
     * Following calls will be able to use the cached script
     */ async exec(keys, args) {
        const res = await this.redis.evalsha(this.sha1, keys, args).catch(async (err)=>{
            if (err instanceof Error && err.message.toLowerCase().includes("noscript")) {
                return await this.redis.eval(this.script, keys, args);
            }
            throw err;
        });
        return res;
    }
    /**
     * Compute the sha1 hash of the script and return its hex representation.
     */ digest(s) {
        const hash = sha1(s, "utf8", "hex");
        return typeof hash === "string" ? hash : new TextDecoder().decode(hash);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/redis.js





/**
 * Serverless redis client for upstash.
 */ class redis_Redis {
    /**
     * Create a new redis client
     *
     * @example
     * ```typescript
     * const redis = new Redis({
     *  url: "<UPSTASH_REDIS_REST_URL>",
     *  token: "<UPSTASH_REDIS_REST_TOKEN>",
     * });
     * ```
     */ constructor(client, opts){
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "opts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "enableTelemetry", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Wrap a new middleware around the HTTP client.
         */ Object.defineProperty(this, "use", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (middleware)=>{
                const makeRequest = this.client.request.bind(this.client);
                this.client.request = (req)=>middleware(req, makeRequest);
            }
        });
        /**
         * Technically this is not private, we can hide it from intellisense by doing this
         */ Object.defineProperty(this, "addTelemetry", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (telemetry)=>{
                if (!this.enableTelemetry) {
                    return;
                }
                try {
                    // @ts-ignore - The `Requester` interface does not know about this method but it will be there
                    // as long as the user uses the standard HttpClient
                    this.client.mergeTelemetry(telemetry);
                } catch  {
                // ignore
                }
            }
        });
        /**
         * Create a new pipeline that allows you to send requests in bulk.
         *
         * @see {@link Pipeline}
         */ Object.defineProperty(this, "pipeline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>new Pipeline({
                    client: this.client,
                    commandOptions: this.opts,
                    multiExec: false
                })
        });
        /**
         * Create a new transaction to allow executing multiple steps atomically.
         *
         * All the commands in a transaction are serialized and executed sequentially. A request sent by
         * another client will never be served in the middle of the execution of a Redis Transaction. This
         * guarantees that the commands are executed as a single isolated operation.
         *
         * @see {@link Pipeline}
         */ Object.defineProperty(this, "multi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>new Pipeline({
                    client: this.client,
                    commandOptions: this.opts,
                    multiExec: true
                })
        });
        /**
         * @see https://redis.io/commands/append
         */ Object.defineProperty(this, "append", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new AppendCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/bitcount
         */ Object.defineProperty(this, "bitcount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new BitCountCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/bitop
         */ Object.defineProperty(this, "bitop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (op, destinationKey, sourceKey, ...sourceKeys)=>new BitOpCommand([
                    op,
                    destinationKey,
                    sourceKey,
                    ...sourceKeys
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/bitpos
         */ Object.defineProperty(this, "bitpos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new BitPosCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/dbsize
         */ Object.defineProperty(this, "dbsize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>new DBSizeCommand(this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/decr
         */ Object.defineProperty(this, "decr", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new DecrCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/decrby
         */ Object.defineProperty(this, "decrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new DecrByCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/del
         */ Object.defineProperty(this, "del", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new DelCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/echo
         */ Object.defineProperty(this, "echo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new EchoCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/eval
         */ Object.defineProperty(this, "eval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new EvalCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/evalsha
         */ Object.defineProperty(this, "evalsha", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new EvalshaCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/exists
         */ Object.defineProperty(this, "exists", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ExistsCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/expire
         */ Object.defineProperty(this, "expire", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ExpireCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/expireat
         */ Object.defineProperty(this, "expireat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ExpireAtCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/flushall
         */ Object.defineProperty(this, "flushall", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (args)=>new FlushAllCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/flushdb
         */ Object.defineProperty(this, "flushdb", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new FlushDBCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/get
         */ Object.defineProperty(this, "get", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new GetCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/getbit
         */ Object.defineProperty(this, "getbit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new GetBitCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/getdel
         */ Object.defineProperty(this, "getdel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new GetDelCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/getrange
         */ Object.defineProperty(this, "getrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new GetRangeCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/getset
         */ Object.defineProperty(this, "getset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, value)=>new GetSetCommand([
                    key,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hdel
         */ Object.defineProperty(this, "hdel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HDelCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hexists
         */ Object.defineProperty(this, "hexists", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HExistsCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hget
         */ Object.defineProperty(this, "hget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HGetCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hgetall
         */ Object.defineProperty(this, "hgetall", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HGetAllCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hincrby
         */ Object.defineProperty(this, "hincrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HIncrByCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hincrbyfloat
         */ Object.defineProperty(this, "hincrbyfloat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HIncrByFloatCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hkeys
         */ Object.defineProperty(this, "hkeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HKeysCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hlen
         */ Object.defineProperty(this, "hlen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HLenCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hmget
         */ Object.defineProperty(this, "hmget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HMGetCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hmset
         */ Object.defineProperty(this, "hmset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, kv)=>new HMSetCommand([
                    key,
                    kv
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hrandfield
         */ Object.defineProperty(this, "hrandfield", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, count, withValues)=>new HRandFieldCommand([
                    key,
                    count,
                    withValues
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hscan
         */ Object.defineProperty(this, "hscan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HScanCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hset
         */ Object.defineProperty(this, "hset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, kv)=>new HSetCommand([
                    key,
                    kv
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hsetnx
         */ Object.defineProperty(this, "hsetnx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, field, value)=>new HSetNXCommand([
                    key,
                    field,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hstrlen
         */ Object.defineProperty(this, "hstrlen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HStrLenCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/hvals
         */ Object.defineProperty(this, "hvals", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new HValsCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/incr
         */ Object.defineProperty(this, "incr", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new IncrCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/incrby
         */ Object.defineProperty(this, "incrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new IncrByCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/incrbyfloat
         */ Object.defineProperty(this, "incrbyfloat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new IncrByFloatCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/keys
         */ Object.defineProperty(this, "keys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new KeysCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lindex
         */ Object.defineProperty(this, "lindex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new LIndexCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/linsert
         */ Object.defineProperty(this, "linsert", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, direction, pivot, value)=>new LInsertCommand([
                    key,
                    direction,
                    pivot,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/llen
         */ Object.defineProperty(this, "llen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new LLenCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lmove
         */ Object.defineProperty(this, "lmove", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new LMoveCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lpop
         */ Object.defineProperty(this, "lpop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new LPopCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lpos
         */ Object.defineProperty(this, "lpos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new LPosCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lpush
         */ Object.defineProperty(this, "lpush", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>new LPushCommand([
                    key,
                    ...elements
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lpushx
         */ Object.defineProperty(this, "lpushx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>new LPushXCommand([
                    key,
                    ...elements
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lrange
         */ Object.defineProperty(this, "lrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new LRangeCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lrem
         */ Object.defineProperty(this, "lrem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, count, value)=>new LRemCommand([
                    key,
                    count,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/lset
         */ Object.defineProperty(this, "lset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, index, value)=>new LSetCommand([
                    key,
                    index,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/ltrim
         */ Object.defineProperty(this, "ltrim", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new LTrimCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/mget
         */ Object.defineProperty(this, "mget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new MGetCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/mset
         */ Object.defineProperty(this, "mset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (kv)=>new MSetCommand([
                    kv
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/msetnx
         */ Object.defineProperty(this, "msetnx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (kv)=>new MSetNXCommand([
                    kv
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/persist
         */ Object.defineProperty(this, "persist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new PersistCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/pexpire
         */ Object.defineProperty(this, "pexpire", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new PExpireCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/pexpireat
         */ Object.defineProperty(this, "pexpireat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new PExpireAtCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/ping
         */ Object.defineProperty(this, "ping", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (args)=>new PingCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/psetex
         */ Object.defineProperty(this, "psetex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ttl, value)=>new PSetEXCommand([
                    key,
                    ttl,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/pttl
         */ Object.defineProperty(this, "pttl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new PTtlCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/publish
         */ Object.defineProperty(this, "publish", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new PublishCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/randomkey
         */ Object.defineProperty(this, "randomkey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>new RandomKeyCommand().exec(this.client)
        });
        /**
         * @see https://redis.io/commands/rename
         */ Object.defineProperty(this, "rename", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new RenameCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/renamenx
         */ Object.defineProperty(this, "renamenx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new RenameNXCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/rpop
         */ Object.defineProperty(this, "rpop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new RPopCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/rpush
         */ Object.defineProperty(this, "rpush", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>new RPushCommand([
                    key,
                    ...elements
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/rpushx
         */ Object.defineProperty(this, "rpushx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...elements)=>new RPushXCommand([
                    key,
                    ...elements
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sadd
         */ Object.defineProperty(this, "sadd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...members)=>new SAddCommand([
                    key,
                    ...members
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/scan
         */ Object.defineProperty(this, "scan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ScanCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/scard
         */ Object.defineProperty(this, "scard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SCardCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/script-exists
         */ Object.defineProperty(this, "scriptExists", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ScriptExistsCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/script-flush
         */ Object.defineProperty(this, "scriptFlush", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ScriptFlushCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/script-load
         */ Object.defineProperty(this, "scriptLoad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ScriptLoadCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sdiff
         */ Object.defineProperty(this, "sdiff", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SDiffCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sdiffstore
         */ Object.defineProperty(this, "sdiffstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SDiffStoreCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/set
         */ Object.defineProperty(this, "set", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, value, opts)=>new SetCommand([
                    key,
                    value,
                    opts
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/setbit
         */ Object.defineProperty(this, "setbit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SetBitCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/setex
         */ Object.defineProperty(this, "setex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ttl, value)=>new SetExCommand([
                    key,
                    ttl,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/setnx
         */ Object.defineProperty(this, "setnx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, value)=>new SetNxCommand([
                    key,
                    value
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/setrange
         */ Object.defineProperty(this, "setrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SetRangeCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sinter
         */ Object.defineProperty(this, "sinter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SInterCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sinterstore
         */ Object.defineProperty(this, "sinterstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SInterStoreCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sismember
         */ Object.defineProperty(this, "sismember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>new SIsMemberCommand([
                    key,
                    member
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/smismember
         */ Object.defineProperty(this, "smismember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, members)=>new SMIsMemberCommand([
                    key,
                    members
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/smembers
         */ Object.defineProperty(this, "smembers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SMembersCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/smove
         */ Object.defineProperty(this, "smove", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (source, destination, member)=>new SMoveCommand([
                    source,
                    destination,
                    member
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/spop
         */ Object.defineProperty(this, "spop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SPopCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/srandmember
         */ Object.defineProperty(this, "srandmember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SRandMemberCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/srem
         */ Object.defineProperty(this, "srem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...members)=>new SRemCommand([
                    key,
                    ...members
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sscan
         */ Object.defineProperty(this, "sscan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SScanCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/strlen
         */ Object.defineProperty(this, "strlen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new StrLenCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sunion
         */ Object.defineProperty(this, "sunion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SUnionCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/sunionstore
         */ Object.defineProperty(this, "sunionstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new SUnionStoreCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/time
         */ Object.defineProperty(this, "time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ()=>new TimeCommand().exec(this.client)
        });
        /**
         * @see https://redis.io/commands/touch
         */ Object.defineProperty(this, "touch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new TouchCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/ttl
         */ Object.defineProperty(this, "ttl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new TtlCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/type
         */ Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new TypeCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/unlink
         */ Object.defineProperty(this, "unlink", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new UnlinkCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zadd
         */ Object.defineProperty(this, "zadd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>{
                if ("score" in args[1]) {
                    return new ZAddCommand([
                        args[0],
                        args[1],
                        ...args.slice(2)
                    ], this.opts).exec(this.client);
                }
                return new ZAddCommand([
                    args[0],
                    args[1],
                    ...args.slice(2)
                ], this.opts).exec(this.client);
            }
        });
        /**
         * @see https://redis.io/commands/zcard
         */ Object.defineProperty(this, "zcard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZCardCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zcount
         */ Object.defineProperty(this, "zcount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZCountCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zdiffstore
         */ Object.defineProperty(this, "zdiffstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZDiffStoreCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zincrby
         */ Object.defineProperty(this, "zincrby", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, increment, member)=>new ZIncrByCommand([
                    key,
                    increment,
                    member
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zinterstore
         */ Object.defineProperty(this, "zinterstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZInterStoreCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zlexcount
         */ Object.defineProperty(this, "zlexcount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZLexCountCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zmscore
         */ Object.defineProperty(this, "zmscore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZMScoreCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zpopmax
         */ Object.defineProperty(this, "zpopmax", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZPopMaxCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zpopmin
         */ Object.defineProperty(this, "zpopmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZPopMinCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zrange
         */ Object.defineProperty(this, "zrange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZRangeCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zrank
         */ Object.defineProperty(this, "zrank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>new ZRankCommand([
                    key,
                    member
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zrem
         */ Object.defineProperty(this, "zrem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, ...members)=>new ZRemCommand([
                    key,
                    ...members
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zremrangebylex
         */ Object.defineProperty(this, "zremrangebylex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZRemRangeByLexCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zremrangebyrank
         */ Object.defineProperty(this, "zremrangebyrank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZRemRangeByRankCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zremrangebyscore
         */ Object.defineProperty(this, "zremrangebyscore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZRemRangeByScoreCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zrevrank
         */ Object.defineProperty(this, "zrevrank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>new ZRevRankCommand([
                    key,
                    member
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zscan
         */ Object.defineProperty(this, "zscan", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZScanCommand(args, this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zscore
         */ Object.defineProperty(this, "zscore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (key, member)=>new ZScoreCommand([
                    key,
                    member
                ], this.opts).exec(this.client)
        });
        /**
         * @see https://redis.io/commands/zunionstore
         */ Object.defineProperty(this, "zunionstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (...args)=>new ZUnionStoreCommand(args, this.opts).exec(this.client)
        });
        this.client = client;
        this.opts = opts;
        this.enableTelemetry = opts?.enableTelemetry ?? true;
    }
    get json() {
        return {
            /**
             * @see https://redis.io/commands/json.arrappend
             */ arrappend: (...args)=>new JsonArrAppendCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.arrindex
             */ arrindex: (...args)=>new JsonArrIndexCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.arrinsert
             */ arrinsert: (...args)=>new JsonArrInsertCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.arrlen
             */ arrlen: (...args)=>new JsonArrLenCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.arrpop
             */ arrpop: (...args)=>new JsonArrPopCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.arrtrim
             */ arrtrim: (...args)=>new JsonArrTrimCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.clear
             */ clear: (...args)=>new JsonClearCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.del
             */ del: (...args)=>new JsonDelCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.forget
             */ forget: (...args)=>new JsonForgetCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.get
             */ get: (...args)=>new JsonGetCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.mget
             */ mget: (...args)=>new JsonMGetCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.numincrby
             */ numincrby: (...args)=>new JsonNumIncrByCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.nummultby
             */ nummultby: (...args)=>new JsonNumMultByCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.objkeys
             */ objkeys: (...args)=>new JsonObjKeysCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.objlen
             */ objlen: (...args)=>new JsonObjLenCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.resp
             */ resp: (...args)=>new JsonRespCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.set
             */ set: (...args)=>new JsonSetCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.strappend
             */ strappend: (...args)=>new JsonStrAppendCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.strlen
             */ strlen: (...args)=>new JsonStrLenCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.toggle
             */ toggle: (...args)=>new JsonToggleCommand(args, this.opts).exec(this.client),
            /**
             * @see https://redis.io/commands/json.type
             */ type: (...args)=>new JsonTypeCommand(args, this.opts).exec(this.client)
        };
    }
    createScript(script) {
        return new Script(this, script);
    }
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/pkg/http.js

class HttpClient {
    constructor(config){
        Object.defineProperty(this, "baseUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "retry", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.options = {
            backend: config.options?.backend,
            agent: config.agent,
            responseEncoding: config.responseEncoding ?? "base64",
            cache: config.cache
        };
        this.baseUrl = config.baseUrl.replace(/\/$/, "");
        this.headers = {
            "Content-Type": "application/json",
            ...config.headers
        };
        if (this.options.responseEncoding === "base64") {
            this.headers["Upstash-Encoding"] = "base64";
        }
        if (typeof config?.retry === "boolean" && config?.retry === false) {
            this.retry = {
                attempts: 1,
                backoff: ()=>0
            };
        } else {
            this.retry = {
                attempts: config?.retry?.retries ?? 5,
                backoff: config?.retry?.backoff ?? ((retryCount)=>Math.exp(retryCount) * 50)
            };
        }
    }
    mergeTelemetry(telemetry) {
        function merge(obj, key, value) {
            if (!value) {
                return obj;
            }
            if (obj[key]) {
                obj[key] = [
                    obj[key],
                    value
                ].join(",");
            } else {
                obj[key] = value;
            }
            return obj;
        }
        this.headers = merge(this.headers, "Upstash-Telemetry-Runtime", telemetry.runtime);
        this.headers = merge(this.headers, "Upstash-Telemetry-Platform", telemetry.platform);
        this.headers = merge(this.headers, "Upstash-Telemetry-Sdk", telemetry.sdk);
    }
    async request(req) {
        const requestOptions = {
            cache: this.options.cache,
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(req.body),
            keepalive: true,
            agent: this.options?.agent,
            /**
             * Fastly specific
             */ backend: this.options?.backend
        };
        let res = null;
        let error = null;
        for(let i = 0; i <= this.retry.attempts; i++){
            try {
                res = await fetch([
                    this.baseUrl,
                    ...req.path ?? []
                ].join("/"), requestOptions);
                break;
            } catch (err) {
                error = err;
                await new Promise((r)=>setTimeout(r, this.retry.backoff(i)));
            }
        }
        if (!res) {
            throw error ?? new Error("Exhausted all retries");
        }
        const body = await res.json();
        if (!res.ok) {
            throw new UpstashError(body.error);
        }
        if (this.options?.responseEncoding === "base64") {
            return Array.isArray(body) ? body.map(http_decode) : http_decode(body);
        }
        return body;
    }
}
function base64decode(b64) {
    let dec = "";
    try {
        /**
         * Using only atob() is not enough because it doesn't work with unicode characters
         */ const binString = atob(b64);
        const size = binString.length;
        const bytes = new Uint8Array(size);
        for(let i = 0; i < size; i++){
            bytes[i] = binString.charCodeAt(i);
        }
        dec = new TextDecoder().decode(bytes);
    } catch  {
        dec = b64;
    }
    return dec;
// try {
//   return decodeURIComponent(dec);
// } catch {
//   return dec;
// }
}
function http_decode(raw) {
    let result = undefined;
    switch(typeof raw.result){
        case "undefined":
            return raw;
        case "number":
            {
                result = raw.result;
                break;
            }
        case "object":
            {
                if (Array.isArray(raw.result)) {
                    result = raw.result.map((v)=>typeof v === "string" ? base64decode(v) : Array.isArray(v) ? v.map(base64decode) : v);
                } else {
                    // If it's not an array it must be null
                    // Apparently null is an object in javascript
                    result = null;
                }
                break;
            }
        case "string":
            {
                result = raw.result === "OK" ? "OK" : base64decode(raw.result);
                break;
            }
        default:
            break;
    }
    return {
        result,
        error: raw.error
    };
}

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/version.js
const VERSION = "v1.21.0";

;// CONCATENATED MODULE: ./node_modules/@upstash/redis/esm/platforms/nodejs.js
/* provided dependency */ var Buffer = __webpack_require__(6195)["Buffer"];
// deno-lint-ignore-file



/**
 * Workaround for nodejs 14, where atob is not included in the standardlib
 */ if (typeof atob === "undefined") {
    global.atob = function(b64) {
        return Buffer.from(b64, "base64").toString("utf-8");
    };
}
/**
 * Serverless redis client for upstash.
 */ class Redis extends redis_Redis {
    constructor(configOrRequester){
        if ("request" in configOrRequester) {
            super(configOrRequester);
            return;
        }
        if (configOrRequester.url.startsWith(" ") || configOrRequester.url.endsWith(" ") || /\r|\n/.test(configOrRequester.url)) {
            console.warn("The redis url contains whitespace or newline, which can cause errors!");
        }
        if (configOrRequester.token.startsWith(" ") || configOrRequester.token.endsWith(" ") || /\r|\n/.test(configOrRequester.token)) {
            console.warn("The redis token contains whitespace or newline, which can cause errors!");
        }
        const client = new HttpClient({
            baseUrl: configOrRequester.url,
            retry: configOrRequester.retry,
            headers: {
                authorization: `Bearer ${configOrRequester.token}`
            },
            agent: configOrRequester.agent,
            responseEncoding: configOrRequester.responseEncoding,
            cache: "no-store"
        });
        super(client, {
            automaticDeserialization: configOrRequester.automaticDeserialization,
            enableTelemetry: !process.env.UPSTASH_DISABLE_TELEMETRY
        });
        this.addTelemetry({
            runtime:  true ? "edge-light" : 0,
            platform: process.env.VERCEL ? "vercel" : process.env.AWS_REGION ? "aws" : "unknown",
            sdk: `@upstash/redis@${VERSION}`
        });
    }
    /**
     * Create a new Upstash Redis instance from environment variables.
     *
     * Use this to automatically load connection secrets from your environment
     * variables. For instance when using the Vercel integration.
     *
     * This tries to load `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` from
     * your environment using `process.env`.
     */ static fromEnv(config) {
        // @ts-ignore process will be defined in node
        if (typeof process?.env === "undefined") {
            throw new Error('Unable to get environment variables, `process.env` is undefined. If you are deploying to cloudflare, please import from "@upstash/redis/cloudflare" instead');
        }
        // @ts-ignore process will be defined in node
        const url = process?.env["UPSTASH_REDIS_REST_URL"];
        if (!url) {
            throw new Error("Unable to find environment variable: `UPSTASH_REDIS_REST_URL`");
        }
        // @ts-ignore process will be defined in node
        const token = process?.env["UPSTASH_REDIS_REST_TOKEN"];
        if (!token) {
            throw new Error("Unable to find environment variable: `UPSTASH_REDIS_REST_TOKEN`");
        }
        return new Redis({
            ...config,
            url,
            token
        });
    }
}

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js
var response = __webpack_require__(5409);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/exports/next-response.js
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map

;// CONCATENATED MODULE: ./middleware.ts



async function middleware(request, event) {
    const ip = request.ip ?? "127.0.0.1";
    // ratelimit for demo app: https://demo.useliftoff.com/
    if ( true && process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
        const ratelimit = new dist.Ratelimit({
            redis: Redis.fromEnv(),
            // Rate limit to 6 attempts per 2 days
            limiter: dist.Ratelimit.cachedFixedWindow(12, `${24 * 60 * 60}s`),
            ephemeralCache: new Map(),
            analytics: true
        });
        const { success , pending , limit , reset , remaining  } = await ratelimit.limit(`ratelimit_middleware_${ip}`);
        event.waitUntil(pending);
        const res = success ? response/* NextResponse.next */.x.next() : response/* NextResponse.redirect */.x.redirect(new URL("/api/blocked", request.url));
        res.headers.set("X-RateLimit-Limit", limit.toString());
        res.headers.set("X-RateLimit-Remaining", remaining.toString());
        res.headers.set("X-RateLimit-Reset", reset.toString());
        return res;
    }
}
const config = {
    matcher: [
        "/api/transcribe",
        "/api/generate"
    ]
};


/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    Analytics: ()=>Analytics
});
module.exports = __toCommonJS(src_exports);
// src/analytics.ts
var Key = class {
    constructor(prefix, table, bucket){
        this.prefix = prefix;
        this.table = table;
        this.bucket = bucket;
    }
    toString() {
        return [
            this.prefix,
            this.table,
            this.bucket
        ].join(":");
    }
    static fromString(key) {
        const [prefix, table, bucket] = key.split(":");
        return new Key(prefix, table, parseInt(bucket));
    }
};
var Cache = class {
    constructor(ttl){
        this.cache = /* @__PURE__ */ new Map();
        this.ttl = ttl;
        setInterval(()=>{
            const now = Date.now();
            for (const [key, { createdAt  }] of this.cache){
                if (now - createdAt > this.ttl) {
                    this.cache.delete(key);
                }
            }
        }, this.ttl * 10);
    }
    get(key) {
        const data = this.cache.get(key);
        if (!data) {
            return null;
        }
        if (Date.now() - data.createdAt > this.ttl) {
            this.cache.delete(key);
            return null;
        }
        return data.value;
    }
    set(key, value) {
        this.cache.set(key, {
            createdAt: Date.now(),
            value
        });
    }
};
var Analytics = class {
    constructor(config){
        this.cache = new Cache(6e4);
        this.redis = config.redis;
        this.prefix = config.prefix ?? "@upstash/analytics";
        this.bucketSize = this.parseWindow(config.window);
        this.retention = config.retention ? this.parseWindow(config.retention) : void 0;
    }
    validateTableName(table) {
        const regex = /^[a-zA-Z0-9_-]+$/;
        if (!regex.test(table)) {
            throw new Error(`Invalid table name: ${table}. Table names can only contain letters, numbers, dashes and underscores.`);
        }
    }
    parseWindow(window) {
        if (typeof window === "number") {
            if (window <= 0) {
                throw new Error(`Invalid window: ${window}`);
            }
            return window;
        }
        const regex = /^(\d+)([smhd])$/;
        if (!regex.test(window)) {
            throw new Error(`Invalid window: ${window}`);
        }
        const [, valueStr, unit] = window.match(regex);
        const value = parseInt(valueStr);
        switch(unit){
            case "s":
                return value * 1e3;
            case "m":
                return value * 1e3 * 60;
            case "h":
                return value * 1e3 * 60 * 60;
            case "d":
                return value * 1e3 * 60 * 60 * 24;
            default:
                throw new Error(`Invalid window unit: ${unit}`);
        }
    }
    async ingest(table, ...events) {
        this.validateTableName(table);
        await Promise.all(events.map(async (event)=>{
            const time = event.time ?? Date.now();
            const bucket = Math.floor(time / this.bucketSize) * this.bucketSize;
            const key = [
                this.prefix,
                table,
                bucket
            ].join(":");
            await this.redis.hincrby(key, JSON.stringify({
                ...event,
                time: void 0
            }), 1);
        }));
    }
    async loadBuckets(table, opts) {
        this.validateTableName(table);
        const now = Date.now();
        const keys = [];
        if (opts.scan) {
            let cursor = 0;
            const match = [
                this.prefix,
                table,
                "*"
            ].join(":");
            do {
                const [nextCursor, found] = await this.redis.scan(cursor, {
                    match
                });
                cursor = nextCursor;
                for (const key of found){
                    const timestamp = parseInt(key.split(":").pop());
                    if (this.retention && timestamp < now - this.retention) {
                        await this.redis.del(key);
                        continue;
                    }
                    if (timestamp >= opts.range[0] || timestamp <= opts.range[1]) {
                        keys.push(key);
                    }
                }
            }while (cursor !== 0);
        } else {
            let t = Math.floor(now / this.bucketSize) * this.bucketSize;
            while(t > opts.range[1]){
                t -= this.bucketSize;
            }
            while(t >= opts.range[0]){
                keys.push([
                    this.prefix,
                    table,
                    t
                ].join(":"));
                t -= this.bucketSize;
            }
        }
        const loadKeys = [];
        const buckets = [];
        for (const key of keys){
            const cached = this.cache.get(key);
            if (cached) {
                buckets.push({
                    key,
                    hash: cached
                });
            } else {
                loadKeys.push(key);
            }
        }
        const p = this.redis.pipeline();
        for (const key of loadKeys){
            p.hgetall(key);
        }
        const res = loadKeys.length > 0 ? await p.exec() : [];
        for(let i = 0; i < loadKeys.length; i++){
            const key = loadKeys[i];
            const hash = res[i];
            if (hash) {
                this.cache.set(key, hash);
            }
            buckets.push({
                key,
                hash: hash ?? {}
            });
        }
        return buckets.sort((a, b)=>a.hash.time - b.hash.time);
    }
    async count(table, opts) {
        this.validateTableName(table);
        const buckets = await this.loadBuckets(table, {
            range: opts.range
        });
        return await Promise.all(buckets.map(async ({ key , hash  })=>{
            const timestamp = parseInt(key.split(":").pop());
            return {
                time: timestamp,
                count: Object.values(hash).reduce((acc, curr)=>acc + curr, 0)
            };
        }));
    }
    async aggregateBy(table, aggregateBy, opts) {
        this.validateTableName(table);
        const buckets = await this.loadBuckets(table, {
            range: opts.range
        });
        const days = await Promise.all(buckets.map(async ({ key , hash  })=>{
            const day = {
                time: Key.fromString(key).bucket
            };
            for (const [field, count] of Object.entries(hash)){
                const r = JSON.parse(field);
                for (const [k, v] of Object.entries(r)){
                    const agg = r[aggregateBy];
                    if (!day[agg]) {
                        day[agg] = {};
                    }
                    if (k === aggregateBy) {
                        continue;
                    }
                    if (!day[agg][v]) {
                        day[agg][v] = 0;
                    }
                    day[agg][v] += count;
                }
            }
            return day;
        }));
        return days;
    }
    async query(table, opts) {
        this.validateTableName(table);
        const buckets = await this.loadBuckets(table, {
            range: opts.range
        });
        const days = await Promise.all(buckets.map(async ({ key , hash  })=>{
            const day = {
                time: Key.fromString(key).bucket
            };
            for (const [field, count] of Object.entries(hash)){
                const r = JSON.parse(field);
                let skip = false;
                if (opts?.where) {
                    for (const [requiredKey, requiredValue] of Object.entries(opts.where)){
                        if (!(requiredKey in r)) {
                            skip = true;
                            break;
                        }
                        if (r[requiredKey] !== requiredValue) {
                            skip = true;
                            break;
                        }
                    }
                }
                if (skip) {
                    continue;
                }
                for (const [k, v] of Object.entries(r)){
                    if (opts?.filter && !opts.filter.includes(k)) {
                        continue;
                    }
                    if (!day[k]) {
                        day[k] = {};
                    }
                    if (!day[k][v]) {
                        day[k][v] = 0;
                    }
                    day[k][v] += count;
                }
            }
            return day;
        }));
        return days;
    }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 2998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    Analytics: ()=>Analytics,
    MultiRegionRatelimit: ()=>MultiRegionRatelimit,
    Ratelimit: ()=>RegionRatelimit
});
module.exports = __toCommonJS(src_exports);
// src/analytics.ts
var import_core_analytics = __webpack_require__(7934);
var Analytics = class {
    constructor(config){
        this.table = "events";
        this.analytics = new import_core_analytics.Analytics({
            // @ts-expect-error we need to fix the types in core-analytics, it should only require the methods it needs, not the whole sdk
            redis: config.redis,
            window: "1h",
            prefix: config.prefix ?? "@upstash/ratelimit",
            retention: "90d"
        });
    }
    /**
   * Try to extract the geo information from the request
   *
   * This handles Vercel's `req.geo` and  and Cloudflare's `request.cf` properties
   * @param req
   * @returns
   */ extractGeo(req) {
        if (typeof req.geo !== "undefined") {
            return req.geo;
        }
        if (typeof req.cf !== "undefined") {
            return req.cf;
        }
        return {};
    }
    async record(event) {
        await this.analytics.ingest(this.table, event);
    }
    async series(filter, cutoff) {
        const records = await this.analytics.query(this.table, {
            filter: [
                filter
            ],
            range: [
                cutoff,
                Date.now()
            ]
        });
        return records;
    }
    async getUsage(cutoff = 0) {
        const records = await this.analytics.aggregateBy(this.table, "identifier", {
            range: [
                cutoff,
                Date.now()
            ]
        });
        const usage = {};
        for (const bucket of records){
            for (const [k, v] of Object.entries(bucket)){
                if (k === "time") {
                    continue;
                }
                if (!usage[k]) {
                    usage[k] = {
                        success: 0,
                        blocked: 0
                    };
                }
                usage[k].success += v["true"] ?? 0;
                usage[k].blocked += v["false"] ?? 0;
            }
        }
        return usage;
    }
};
// src/cache.ts
var Cache = class {
    constructor(cache){
        this.cache = cache;
    }
    isBlocked(identifier) {
        if (!this.cache.has(identifier)) {
            return {
                blocked: false,
                reset: 0
            };
        }
        const reset = this.cache.get(identifier);
        if (reset < Date.now()) {
            this.cache.delete(identifier);
            return {
                blocked: false,
                reset: 0
            };
        }
        return {
            blocked: true,
            reset
        };
    }
    blockUntil(identifier, reset) {
        this.cache.set(identifier, reset);
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    get(key) {
        return this.cache.get(key) || null;
    }
    incr(key) {
        let value = this.cache.get(key) ?? 0;
        value += 1;
        this.cache.set(key, value);
        return value;
    }
};
// src/duration.ts
function ms(d) {
    const match = d.match(/^(\d+)\s?(ms|s|m|h|d)$/);
    if (!match) {
        throw new Error(`Unable to parse window size: ${d}`);
    }
    const time = parseInt(match[1]);
    const unit = match[2];
    switch(unit){
        case "ms":
            return time;
        case "s":
            return time * 1e3;
        case "m":
            return time * 1e3 * 60;
        case "h":
            return time * 1e3 * 60 * 60;
        case "d":
            return time * 1e3 * 60 * 60 * 24;
        default:
            throw new Error(`Unable to parse window size: ${d}`);
    }
}
// src/ratelimit.ts
var Ratelimit = class {
    constructor(config){
        /**
   * Determine if a request should pass or be rejected based on the identifier and previously chosen ratelimit.
   *
   * Use this if you want to reject all requests that you can not handle right now.
   *
   * @example
   * ```ts
   *  const ratelimit = new Ratelimit({
   *    redis: Redis.fromEnv(),
   *    limiter: Ratelimit.slidingWindow(10, "10 s")
   *  })
   *
   *  const { success } = await ratelimit.limit(id)
   *  if (!success){
   *    return "Nope"
   *  }
   *  return "Yes"
   * ```
   */ this.limit = async (identifier, req)=>{
            const key = [
                this.prefix,
                identifier
            ].join(":");
            let timeoutId = null;
            try {
                const arr = [
                    this.limiter(this.ctx, key)
                ];
                if (this.timeout > 0) {
                    arr.push(new Promise((resolve)=>{
                        timeoutId = setTimeout(()=>{
                            resolve({
                                success: true,
                                limit: 0,
                                remaining: 0,
                                reset: 0,
                                pending: Promise.resolve()
                            });
                        }, this.timeout);
                    }));
                }
                const res = await Promise.race(arr);
                if (this.analytics) {
                    try {
                        const geo = req ? this.analytics.extractGeo(req) : void 0;
                        const analyticsP = this.analytics.record({
                            identifier,
                            time: Date.now(),
                            success: res.success,
                            ...geo
                        }).catch((err)=>{
                            console.warn("Failed to record analytics", err);
                        });
                        res.pending = Promise.all([
                            res.pending,
                            analyticsP
                        ]);
                    } catch (err) {
                        console.warn("Failed to record analytics", err);
                    }
                }
                return res;
            } finally{
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        };
        /**
   * Block until the request may pass or timeout is reached.
   *
   * This method returns a promise that resolves as soon as the request may be processed
   * or after the timeoue has been reached.
   *
   * Use this if you want to delay the request until it is ready to get processed.
   *
   * @example
   * ```ts
   *  const ratelimit = new Ratelimit({
   *    redis: Redis.fromEnv(),
   *    limiter: Ratelimit.slidingWindow(10, "10 s")
   *  })
   *
   *  const { success } = await ratelimit.blockUntilReady(id, 60_000)
   *  if (!success){
   *    return "Nope"
   *  }
   *  return "Yes"
   * ```
   */ this.blockUntilReady = async (identifier, timeout)=>{
            if (timeout <= 0) {
                throw new Error("timeout must be positive");
            }
            let res;
            const deadline = Date.now() + timeout;
            while(true){
                res = await this.limit(identifier);
                if (res.success) {
                    break;
                }
                if (res.reset === 0) {
                    throw new Error("This should not happen");
                }
                const wait = Math.min(res.reset, deadline) - Date.now();
                await new Promise((r)=>setTimeout(r, wait));
                if (Date.now() > deadline) {
                    break;
                }
            }
            return res;
        };
        this.ctx = config.ctx;
        this.limiter = config.limiter;
        this.timeout = config.timeout ?? 5e3;
        this.prefix = config.prefix ?? "@upstash/ratelimit";
        this.analytics = config.analytics ? new Analytics({
            redis: Array.isArray(this.ctx.redis) ? this.ctx.redis[0] : this.ctx.redis,
            prefix: this.prefix
        }) : void 0;
        if (config.ephemeralCache instanceof Map) {
            this.ctx.cache = new Cache(config.ephemeralCache);
        } else if (typeof config.ephemeralCache === "undefined") {
            this.ctx.cache = new Cache(/* @__PURE__ */ new Map());
        }
    }
};
// src/multi.ts
function randomId() {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for(let i = 0; i < 16; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var MultiRegionRatelimit = class extends Ratelimit {
    /**
   * Create a new Ratelimit instance by providing a `@upstash/redis` instance and the algorithn of your choice.
   */ constructor(config){
        super({
            prefix: config.prefix,
            limiter: config.limiter,
            timeout: config.timeout,
            analytics: config.analytics,
            ctx: {
                redis: config.redis,
                cache: config.ephemeralCache ? new Cache(config.ephemeralCache) : void 0
            }
        });
    }
    /**
   * Each requests inside a fixed time increases a counter.
   * Once the counter reaches a maxmimum allowed number, all further requests are
   * rejected.
   *
   * **Pro:**
   *
   * - Newer requests are not starved by old ones.
   * - Low storage cost.
   *
   * **Con:**
   *
   * A burst of requests near the boundary of a window can result in a very
   * high request rate because two windows will be filled with requests quickly.
   *
   * @param tokens - How many requests a user can make in each time window.
   * @param window - A fixed timeframe
   */ static fixedWindow(tokens, window) {
        const windowDuration = ms(window);
        const script = `
    local key     = KEYS[1]
    local id      = ARGV[1]
    local window  = ARGV[2]
    
    redis.call("SADD", key, id)
    local members = redis.call("SMEMBERS", key)
    if #members == 1 then
    -- The first time this key is set, the value will be 1.
    -- So we only need the expire command once
      redis.call("PEXPIRE", key, window)
    end
    
    return members
`;
        return async function(ctx, identifier) {
            if (ctx.cache) {
                const { blocked , reset: reset2  } = ctx.cache.isBlocked(identifier);
                if (blocked) {
                    return {
                        success: false,
                        limit: tokens,
                        remaining: 0,
                        reset: reset2,
                        pending: Promise.resolve()
                    };
                }
            }
            const requestID = randomId();
            const bucket = Math.floor(Date.now() / windowDuration);
            const key = [
                identifier,
                bucket
            ].join(":");
            const dbs = ctx.redis.map((redis)=>({
                    redis,
                    request: redis.eval(script, [
                        key
                    ], [
                        requestID,
                        windowDuration
                    ])
                }));
            const firstResponse = await Promise.any(dbs.map((s)=>s.request));
            const usedTokens = firstResponse.length;
            const remaining = tokens - usedTokens - 1;
            async function sync() {
                const individualIDs = await Promise.all(dbs.map((s)=>s.request));
                const allIDs = Array.from(new Set(individualIDs.flatMap((_)=>_)).values());
                for (const db of dbs){
                    const ids = await db.request;
                    if (ids.length >= tokens) {
                        continue;
                    }
                    const diff = allIDs.filter((id)=>!ids.includes(id));
                    if (diff.length === 0) {
                        continue;
                    }
                    await db.redis.sadd(key, ...allIDs);
                }
            }
            const success = remaining > 0;
            const reset = (bucket + 1) * windowDuration;
            if (ctx.cache && !success) {
                ctx.cache.blockUntil(identifier, reset);
            }
            return {
                success,
                limit: tokens,
                remaining,
                reset,
                pending: sync()
            };
        };
    }
    /**
   * Combined approach of `slidingLogs` and `fixedWindow` with lower storage
   * costs than `slidingLogs` and improved boundary behavior by calcualting a
   * weighted score between two windows.
   *
   * **Pro:**
   *
   * Good performance allows this to scale to very high loads.
   *
   * **Con:**
   *
   * Nothing major.
   *
   * @param tokens - How many requests a user can make in each time window.
   * @param window - The duration in which the user can max X requests.
   */ static slidingWindow(tokens, window) {
        const windowSize = ms(window);
        const script = `
      local currentKey  = KEYS[1]           -- identifier including prefixes
      local previousKey = KEYS[2]           -- key of the previous bucket
      local tokens      = tonumber(ARGV[1]) -- tokens per window
      local now         = ARGV[2]           -- current timestamp in milliseconds
      local window      = ARGV[3]           -- interval in milliseconds
      local requestID   = ARGV[4]           -- uuid for this request


      local currentMembers = redis.call("SMEMBERS", currentKey)
      local requestsInCurrentWindow = #currentMembers
      local previousMembers = redis.call("SMEMBERS", previousKey)
      local requestsInPreviousWindow = #previousMembers

      local percentageInCurrent = ( now % window) / window
      if requestsInPreviousWindow * ( 1 - percentageInCurrent ) + requestsInCurrentWindow >= tokens then
        return {currentMembers, previousMembers}
      end

      redis.call("SADD", currentKey, requestID)
      table.insert(currentMembers, requestID)
      if requestsInCurrentWindow == 0 then 
        -- The first time this key is set, the value will be 1.
        -- So we only need the expire command once
        redis.call("PEXPIRE", currentKey, window * 2 + 1000) -- Enough time to overlap with a new window + 1 second
      end
      return {currentMembers, previousMembers}
      `;
        const windowDuration = ms(window);
        return async function(ctx, identifier) {
            if (ctx.cache) {
                const { blocked , reset: reset2  } = ctx.cache.isBlocked(identifier);
                if (blocked) {
                    return {
                        success: false,
                        limit: tokens,
                        remaining: 0,
                        reset: reset2,
                        pending: Promise.resolve()
                    };
                }
            }
            const requestID = randomId();
            const now = Date.now();
            const currentWindow = Math.floor(now / windowSize);
            const currentKey = [
                identifier,
                currentWindow
            ].join(":");
            const previousWindow = currentWindow - windowSize;
            const previousKey = [
                identifier,
                previousWindow
            ].join(":");
            const dbs = ctx.redis.map((redis)=>({
                    redis,
                    request: redis.eval(script, [
                        currentKey,
                        previousKey
                    ], [
                        tokens,
                        now,
                        windowDuration,
                        requestID
                    ])
                }));
            const percentageInCurrent = now % windowDuration / windowDuration;
            const [current, previous] = await Promise.any(dbs.map((s)=>s.request));
            const usedTokens = previous.length * (1 - percentageInCurrent) + current.length;
            const remaining = tokens - usedTokens;
            async function sync() {
                const [individualIDs] = await Promise.all(dbs.map((s)=>s.request));
                const allIDs = Array.from(new Set(individualIDs.flatMap((_)=>_)).values());
                for (const db of dbs){
                    const [ids] = await db.request;
                    if (ids.length >= tokens) {
                        continue;
                    }
                    const diff = allIDs.filter((id)=>!ids.includes(id));
                    if (diff.length === 0) {
                        continue;
                    }
                    await db.redis.sadd(currentKey, ...allIDs);
                }
            }
            const success = remaining > 0;
            const reset = (currentWindow + 1) * windowDuration;
            if (ctx.cache && !success) {
                ctx.cache.blockUntil(identifier, reset);
            }
            return {
                success,
                limit: tokens,
                remaining,
                reset,
                pending: sync()
            };
        };
    }
};
// src/single.ts
var RegionRatelimit = class extends Ratelimit {
    /**
   * Create a new Ratelimit instance by providing a `@upstash/redis` instance and the algorithn of your choice.
   */ constructor(config){
        super({
            prefix: config.prefix,
            limiter: config.limiter,
            timeout: config.timeout,
            analytics: config.analytics,
            ctx: {
                redis: config.redis
            },
            ephemeralCache: config.ephemeralCache
        });
    }
    /**
   * Each requests inside a fixed time increases a counter.
   * Once the counter reaches a maxmimum allowed number, all further requests are
   * rejected.
   *
   * **Pro:**
   *
   * - Newer requests are not starved by old ones.
   * - Low storage cost.
   *
   * **Con:**
   *
   * A burst of requests near the boundary of a window can result in a very
   * high request rate because two windows will be filled with requests quickly.
   *
   * @param tokens - How many requests a user can make in each time window.
   * @param window - A fixed timeframe
   */ static fixedWindow(tokens, window) {
        const windowDuration = ms(window);
        const script = `
    local key     = KEYS[1]
    local window  = ARGV[1]
    
    local r = redis.call("INCR", key)
    if r == 1 then 
    -- The first time this key is set, the value will be 1.
    -- So we only need the expire command once
    redis.call("PEXPIRE", key, window)
    end
    
    return r
    `;
        return async function(ctx, identifier) {
            const bucket = Math.floor(Date.now() / windowDuration);
            const key = [
                identifier,
                bucket
            ].join(":");
            if (ctx.cache) {
                const { blocked , reset: reset2  } = ctx.cache.isBlocked(identifier);
                if (blocked) {
                    return {
                        success: false,
                        limit: tokens,
                        remaining: 0,
                        reset: reset2,
                        pending: Promise.resolve()
                    };
                }
            }
            const usedTokensAfterUpdate = await ctx.redis.eval(script, [
                key
            ], [
                windowDuration
            ]);
            const success = usedTokensAfterUpdate <= tokens;
            const reset = (bucket + 1) * windowDuration;
            if (ctx.cache && !success) {
                ctx.cache.blockUntil(identifier, reset);
            }
            return {
                success,
                limit: tokens,
                remaining: tokens - usedTokensAfterUpdate,
                reset,
                pending: Promise.resolve()
            };
        };
    }
    /**
   * Combined approach of `slidingLogs` and `fixedWindow` with lower storage
   * costs than `slidingLogs` and improved boundary behavior by calcualting a
   * weighted score between two windows.
   *
   * **Pro:**
   *
   * Good performance allows this to scale to very high loads.
   *
   * **Con:**
   *
   * Nothing major.
   *
   * @param tokens - How many requests a user can make in each time window.
   * @param window - The duration in which the user can max X requests.
   */ static slidingWindow(tokens, window) {
        const script = `
      local currentKey  = KEYS[1]           -- identifier including prefixes
      local previousKey = KEYS[2]           -- key of the previous bucket
      local tokens      = tonumber(ARGV[1]) -- tokens per window
      local now         = ARGV[2]           -- current timestamp in milliseconds
      local window      = ARGV[3]           -- interval in milliseconds

      local requestsInCurrentWindow = redis.call("GET", currentKey)
      if requestsInCurrentWindow == false then
        requestsInCurrentWindow = -1
      end


      local requestsInPreviousWindow = redis.call("GET", previousKey)
      if requestsInPreviousWindow == false then
        requestsInPreviousWindow = 0
      end
      local percentageInCurrent = ( now % window) / window
      if requestsInPreviousWindow * ( 1 - percentageInCurrent ) + requestsInCurrentWindow >= tokens then
        return -1
      end

      local newValue = redis.call("INCR", currentKey)
      if newValue == 1 then 
        -- The first time this key is set, the value will be 1.
        -- So we only need the expire command once
        redis.call("PEXPIRE", currentKey, window * 2 + 1000) -- Enough time to overlap with a new window + 1 second
      end
      return tokens - newValue
      `;
        const windowSize = ms(window);
        return async function(ctx, identifier) {
            const now = Date.now();
            const currentWindow = Math.floor(now / windowSize);
            const currentKey = [
                identifier,
                currentWindow
            ].join(":");
            const previousWindow = currentWindow - windowSize;
            const previousKey = [
                identifier,
                previousWindow
            ].join(":");
            if (ctx.cache) {
                const { blocked , reset: reset2  } = ctx.cache.isBlocked(identifier);
                if (blocked) {
                    return {
                        success: false,
                        limit: tokens,
                        remaining: 0,
                        reset: reset2,
                        pending: Promise.resolve()
                    };
                }
            }
            const remaining = await ctx.redis.eval(script, [
                currentKey,
                previousKey
            ], [
                tokens,
                now,
                windowSize
            ]);
            const success = remaining >= 0;
            const reset = (currentWindow + 1) * windowSize;
            if (ctx.cache && !success) {
                ctx.cache.blockUntil(identifier, reset);
            }
            return {
                success,
                limit: tokens,
                remaining: Math.max(0, remaining),
                reset,
                pending: Promise.resolve()
            };
        };
    }
    /**
   * You have a bucket filled with `{maxTokens}` tokens that refills constantly
   * at `{refillRate}` per `{interval}`.
   * Every request will remove one token from the bucket and if there is no
   * token to take, the request is rejected.
   *
   * **Pro:**
   *
   * - Bursts of requests are smoothed out and you can process them at a constant
   * rate.
   * - Allows to set a higher initial burst limit by setting `maxTokens` higher
   * than `refillRate`
   */ static tokenBucket(refillRate, interval, maxTokens) {
        const script = `
        local key         = KEYS[1]           -- identifier including prefixes
        local maxTokens   = tonumber(ARGV[1]) -- maximum number of tokens
        local interval    = tonumber(ARGV[2]) -- size of the window in milliseconds
        local refillRate  = tonumber(ARGV[3]) -- how many tokens are refilled after each interval
        local now         = tonumber(ARGV[4]) -- current timestamp in milliseconds
        local remaining   = 0
        
        local bucket = redis.call("HMGET", key, "updatedAt", "tokens")
        
        if bucket[1] == false then
          -- The bucket does not exist yet, so we create it and add a ttl.
          remaining = maxTokens - 1
          
          redis.call("HMSET", key, "updatedAt", now, "tokens", remaining)
          redis.call("PEXPIRE", key, interval)
  
          return {remaining, now + interval}
        end

        -- The bucket does exist
  
        local updatedAt = tonumber(bucket[1])
        local tokens = tonumber(bucket[2])
  
        if now >= updatedAt + interval then
          remaining = math.min(maxTokens, tokens + refillRate) - 1
          
          redis.call("HMSET", key, "updatedAt", now, "tokens", remaining)
          return {remaining, now + interval}
        end
  
        if tokens > 0 then
          remaining = tokens - 1
          redis.call("HMSET", key, "updatedAt", now, "tokens", remaining)
        end
  
        return {remaining, updatedAt + interval}
       `;
        const intervalDuration = ms(interval);
        return async function(ctx, identifier) {
            if (ctx.cache) {
                const { blocked , reset: reset2  } = ctx.cache.isBlocked(identifier);
                if (blocked) {
                    return {
                        success: false,
                        limit: maxTokens,
                        remaining: 0,
                        reset: reset2,
                        pending: Promise.resolve()
                    };
                }
            }
            const now = Date.now();
            const key = [
                identifier,
                Math.floor(now / intervalDuration)
            ].join(":");
            const [remaining, reset] = await ctx.redis.eval(script, [
                key
            ], [
                maxTokens,
                intervalDuration,
                refillRate,
                now
            ]);
            const success = remaining > 0;
            if (ctx.cache && !success) {
                ctx.cache.blockUntil(identifier, reset);
            }
            return {
                success,
                limit: maxTokens,
                remaining,
                reset,
                pending: Promise.resolve()
            };
        };
    }
    /**
   * cachedFixedWindow first uses the local cache to decide if a request may pass and then updates
   * it asynchronously.
   * This is experimental and not yet recommended for production use.
   *
   * @experimental
   *
   * Each requests inside a fixed time increases a counter.
   * Once the counter reaches a maxmimum allowed number, all further requests are
   * rejected.
   *
   * **Pro:**
   *
   * - Newer requests are not starved by old ones.
   * - Low storage cost.
   *
   * **Con:**
   *
   * A burst of requests near the boundary of a window can result in a very
   * high request rate because two windows will be filled with requests quickly.
   *
   * @param tokens - How many requests a user can make in each time window.
   * @param window - A fixed timeframe
   */ static cachedFixedWindow(tokens, window) {
        const windowDuration = ms(window);
        const script = `
      local key     = KEYS[1]
      local window  = ARGV[1]
      
      local r = redis.call("INCR", key)
      if r == 1 then 
      -- The first time this key is set, the value will be 1.
      -- So we only need the expire command once
      redis.call("PEXPIRE", key, window)
      end
      
      return r
      `;
        return async function(ctx, identifier) {
            if (!ctx.cache) {
                throw new Error("This algorithm requires a cache");
            }
            const bucket = Math.floor(Date.now() / windowDuration);
            const key = [
                identifier,
                bucket
            ].join(":");
            const reset = (bucket + 1) * windowDuration;
            const hit = typeof ctx.cache.get(key) === "number";
            if (hit) {
                const cachedTokensAfterUpdate = ctx.cache.incr(key);
                const success = cachedTokensAfterUpdate < tokens;
                const pending = success ? ctx.redis.eval(script, [
                    key
                ], [
                    windowDuration
                ]).then((t)=>{
                    ctx.cache.set(key, t);
                }) : Promise.resolve();
                return {
                    success,
                    limit: tokens,
                    remaining: tokens - cachedTokensAfterUpdate,
                    reset,
                    pending
                };
            }
            const usedTokensAfterUpdate = await ctx.redis.eval(script, [
                key
            ], [
                windowDuration
            ]);
            ctx.cache.set(key, usedTokensAfterUpdate);
            const remaining = tokens - usedTokensAfterUpdate;
            return {
                success: remaining >= 0,
                limit: tokens,
                remaining,
                reset,
                pending: Promise.resolve()
            };
        };
    }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 7668:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function serialize(c) {
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && c.maxAge && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent(c.value ?? "")}; ${attrs.join("; ")}`;
}
function parseCookieString(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value ?? "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookieString(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookieString(setCookie);
    const { domain , expires , httponly , maxage , path , samesite , secure  } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookieString(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>serialize(value2)).join("; "));
        return this;
    }
    delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>serialize(value)).join("; "));
        return result;
    }
    clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        this._parsed = /* @__PURE__ */ new Map();
        var _a;
        this._headers = responseHeaders;
        const setCookie = ((_a = responseHeaders.getAll) == null ? void 0 : _a.call(responseHeaders, "set-cookie")) ?? responseHeaders.get("set-cookie") ?? [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookieString(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    delete(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this.set({
            name,
            value: "",
            expires: new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(serialize).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = serialize(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 2954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i4": () => (/* binding */ RSC),
/* harmony export */   "ph": () => (/* binding */ NEXT_ROUTER_STATE_TREE),
/* harmony export */   "pz": () => (/* binding */ NEXT_ROUTER_PREFETCH),
/* harmony export */   "yR": () => (/* binding */ FETCH_CACHE_HEADER)
/* harmony export */ });
/* unused harmony exports ACTION, NEXT_URL, RSC_CONTENT_TYPE_HEADER, RSC_VARY_HEADER, FLIGHT_PARAMETERS */
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component; charset=utf-8";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
]; //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BR": () => (/* binding */ CACHE_ONE_YEAR),
/* harmony export */   "dN": () => (/* binding */ NEXT_QUERY_PARAM_PREFIX),
/* harmony export */   "y3": () => (/* binding */ PRERENDER_REVALIDATE_HEADER)
/* harmony export */ });
/* unused harmony exports PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER, MIDDLEWARE_FILENAME, MIDDLEWARE_LOCATION_REGEXP, INSTRUMENTATION_HOOK_FILENAME, INSTRUMENTATION_HOOKS_LOCATION_REGEXP, PAGES_DIR_ALIAS, DOT_NEXT_ALIAS, ROOT_DIR_ALIAS, APP_DIR_ALIAS, RSC_MOD_REF_PROXY_ALIAS, RSC_ACTION_VALIDATE_ALIAS, RSC_ACTION_PROXY_ALIAS, RSC_ACTION_CLIENT_WRAPPER_ALIAS, PUBLIC_DIR_MIDDLEWARE_CONFLICT, SSG_GET_INITIAL_PROPS_CONFLICT, SERVER_PROPS_GET_INIT_PROPS_CONFLICT, SERVER_PROPS_SSG_CONFLICT, STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR, SERVER_PROPS_EXPORT_ERROR, GSP_NO_RETURNED_VALUE, GSSP_NO_RETURNED_VALUE, UNSTABLE_REVALIDATE_RENAME_ERROR, GSSP_COMPONENT_MEMBER_ERROR, NON_STANDARD_NODE_ENV, SSG_FALLBACK_EXPORT_ERROR, ESLINT_DEFAULT_DIRS, ESLINT_DEFAULT_DIRS_WITH_APP, ESLINT_PROMPT_VALUES, SERVER_RUNTIME, WEBPACK_LAYERS */
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const INSTRUMENTATION_HOOKS_LOCATION_REGEXP = `(?:src/)?${INSTRUMENTATION_HOOK_FILENAME}`;
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
// Consolidate this consts when the `appDir` will be stable.
const ESLINT_DEFAULT_DIRS = [
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_DEFAULT_DIRS_WITH_APP = [
    "app",
    ...ESLINT_DEFAULT_DIRS
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
const WEBPACK_LAYERS = {
    shared: "sc_shared",
    server: "sc_server",
    client: "sc_client",
    action: "sc_action",
    api: "api",
    middleware: "middleware",
    edgeAsset: "edge-asset",
    appClient: "app-client"
}; //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 2929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ adapter),
  "g": () => (/* binding */ enhanceGlobals)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page  }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/utils.js
var utils = __webpack_require__(5404);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/next-url.js + 12 modules
var next_url = __webpack_require__(365);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var cookies = __webpack_require__(2135);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0,utils/* validateURL */.r4)(url);
        super(url, init);
        const nextUrl = new next_url/* NextURL */.c(url, {
            headers: (0,utils/* toNodeHeaders */.uf)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new cookies/* RequestCookies */.q(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js
var spec_extension_response = __webpack_require__(5409);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound"
];
const EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(searchParams, extended) {
    for (const name of INTERNAL_QUERY_NAMES){
        searchParams.delete(name);
    }
    if (extended) {
        for (const name of EXTENDED_INTERNAL_QUERY_NAMES){
            searchParams.delete(name);
        }
    }
    return searchParams;
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js

/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment.startsWith("(") && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment.startsWith("@")) {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
var app_router_headers = __webpack_require__(2954);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/lib/constants.js
var constants = __webpack_require__(3987);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js












class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const FLIGHT_PARAMETERS = [
    [
        app_router_headers/* RSC */.i4
    ],
    [
        app_router_headers/* NEXT_ROUTER_STATE_TREE */.ph
    ],
    [
        app_router_headers/* NEXT_ROUTER_PREFETCH */.pz
    ],
    [
        app_router_headers/* FETCH_CACHE_HEADER */.yR
    ]
];
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new next_url/* NextURL */.c(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== constants/* NEXT_QUERY_PARAM_PREFIX */.dN && key.startsWith(constants/* NEXT_QUERY_PARAM_PREFIX */.dN)) {
            const normalizedKey = key.substring(constants/* NEXT_QUERY_PARAM_PREFIX.length */.dN.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = (0,utils/* fromNodeHeaders */.w_)(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    // Strip internal query parameters off the request.
    stripInternalSearchParams(requestUrl.searchParams, true);
    const request = new NextRequestHint({
        page: params.page,
        input:  false ? 0 : String(requestUrl),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response = await params.handler(request, event);
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new next_url/* NextURL */.c(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new next_url/* NextURL */.c(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : spec_extension_response/* NextResponse.next */.x.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol])
    };
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
} //# sourceMappingURL=adapter.js.map


/***/ }),

/***/ 365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ NextURL)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map


/***/ }),

/***/ 2135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.ResponseCookies),
/* harmony export */   "q": () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.RequestCookies)
/* harmony export */ });
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7668);
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__);
 //# sourceMappingURL=cookies.js.map


/***/ }),

/***/ 5409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ NextResponse)
/* harmony export */ });
/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(365);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5404);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2135);



const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies__WEBPACK_IMPORTED_MODULE_1__/* .ResponseCookies */ .n(this.headers),
            url: init.url ? new _next_url__WEBPACK_IMPORTED_MODULE_0__/* .NextURL */ .c(init.url, {
                headers: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toNodeHeaders */ .uf)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map


/***/ }),

/***/ 5404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r4": () => (/* binding */ validateURL),
/* harmony export */   "uf": () => (/* binding */ toNodeHeaders),
/* harmony export */   "w_": () => (/* binding */ fromNodeHeaders)
/* harmony export */ });
/* unused harmony export splitCookiesString */
function fromNodeHeaders(object) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(object)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeHeaders(headers) {
    const result = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                result[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(391));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map