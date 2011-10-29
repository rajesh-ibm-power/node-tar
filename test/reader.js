var tap = require("tap")
  , tar = require("../tar.js")
  , fs = require("fs")
  , path = require("path")
  , file = path.resolve(__dirname, "fixtures/c.tar")
  , index = 0
  , expect =
    [ [ 'entry',
        { path: 'c.txt',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 513,
          mtime: new Date('Wed, 26 Oct 2011 01:10:58 GMT'),
          cksum: 5422,
          type: '0',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '' } ],
      [ 'entry',
        { path: 'cc.txt',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 513,
          mtime: new Date('Wed, 26 Oct 2011 01:11:02 GMT'),
          cksum: 5525,
          type: '0',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '' } ],
      [ 'entry',
        { path: 'r/e/a/l/l/y/-/d/e/e/p/-/f/o/l/d/e/r/-/p/a/t/h/cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 100,
          mtime: new Date('Thu, 27 Oct 2011 03:43:23 GMT'),
          cksum: 18124,
          type: '0',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '' } ],
      [ 'entry',
        { path: 'Ω.txt',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 2,
          mtime: new Date('Thu, 27 Oct 2011 17:51:49 GMT'),
          cksum: 5695,
          type: '0',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '' } ],
      [ 'extendedHeader',
        { path: 'PaxHeader/Ω.txt',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 120,
          mtime: new Date('Thu, 27 Oct 2011 17:51:49 GMT'),
          cksum: 6702,
          type: 'x',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '' },
        { path: 'Ω.txt',
          ctime: 1319737909,
          atime: 1319739061,
          'SCHILY.dev': '234881026',
          'SCHILY.ino': '51693379',
          'SCHILY.nlink': '1' } ],
      [ 'entry',
        { path: 'Ω.txt',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 2,
          mtime: new Date('Thu, 27 Oct 2011 17:51:49 GMT'),
          cksum: 5695,
          type: '0',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '',
          ctime: new Date('Thu, 27 Oct 2011 17:51:49 GMT'),
          atime: new Date('Thu, 27 Oct 2011 18:11:01 GMT'),
          'SCHILY.dev': '234881026',
          'SCHILY.ino': '51693379',
          'SCHILY.nlink': '1' } ],
      [ 'extendedHeader',
        { path: 'PaxHeader/200ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 353,
          mtime: new Date('Thu, 27 Oct 2011 03:41:08 GMT'),
          cksum: 14488,
          type: 'x',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '' },
        { path: '200ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
          ctime: 1319686868,
          atime: 1319741254,
          'LIBARCHIVE.creationtime': '1319686852',
          'SCHILY.dev': '234881026',
          'SCHILY.ino': '51681874',
          'SCHILY.nlink': '1' } ],
      [ 'entry',
        { path: '200ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
          mode: 420,
          uid: 24561,
          gid: 20,
          size: 200,
          mtime: new Date('Thu, 27 Oct 2011 03:41:08 GMT'),
          cksum: 14570,
          type: '0',
          linkpath: '',
          ustar: 'ustar',
          ustarver: '00',
          uname: 'isaacs',
          gname: 'staff',
          devmaj: 0,
          devmin: 0,
          fill: '',
          ctime: new Date('Thu, 27 Oct 2011 03:41:08 GMT'),
          atime: new Date('Thu, 27 Oct 2011 18:47:34 GMT'),
          'LIBARCHIVE.creationtime': '1319686852',
          'SCHILY.dev': '234881026',
          'SCHILY.ino': '51681874',
          'SCHILY.nlink': '1' } ],
      [ 'longPath',
        { path: '././@LongLink',
          mode: 0,
          uid: 0,
          gid: 0,
          size: 201,
          mtime: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
          cksum: 4976,
          type: 'L',
          linkpath: '',
          ustar: false },
        '200ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc' ],
      [ 'entry',
        { path: '200ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
          mode: 420,
          uid: 1000,
          gid: 1000,
          size: 201,
          mtime: new Date('Thu, 27 Oct 2011 22:21:50 GMT'),
          cksum: 14086,
          type: '0',
          linkpath: '',
          ustar: false } ],
      [ 'longLinkpath',
        { path: '././@LongLink',
          mode: 0,
          uid: 0,
          gid: 0,
          size: 201,
          mtime: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
          cksum: 4975,
          type: 'K',
          linkpath: '',
          ustar: false },
        '200ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc' ],
      [ 'longPath',
        { path: '././@LongLink',
          mode: 0,
          uid: 0,
          gid: 0,
          size: 201,
          mtime: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
          cksum: 4976,
          type: 'L',
          linkpath: '',
          ustar: false },
        '200LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL' ],
      [ 'entry',
        { path: '200LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
          mode: 511,
          uid: 1000,
          gid: 1000,
          size: 0,
          mtime: new Date('Fri, 28 Oct 2011 23:05:17 GMT'),
          cksum: 21603,
          type: '2',
          linkpath: '200ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
          ustar: false } ] ]


tap.test("reader test", function (t) {
  var reader = tar.Reader()

  reader.on("end", function () {
    t.equal(index, expect.length, "saw all expected events")
    t.end()
  })

  fs.createReadStream(file)
    .pipe(reader)
    .on("*", function (ev, entry) {
      var wanted = expect[index]
      if (!wanted) {
        t.fail("Unexpected event: " + ev)
      }
      var result = [ev, entry.props]
      entry.on("end", function () {
        result.push(entry.fields || entry.body)
        t.equal(ev, wanted[0], index + " event type")
        t.equivalent(entry.props, wanted[1], index + " entry properties")
        if (wanted[2]) {
          t.equivalent(result[2], wanted[2], index + " metadata values")
        }
        index ++
      })
    })
})
